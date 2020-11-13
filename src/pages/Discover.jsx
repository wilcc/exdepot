import React, { Component } from 'react';

// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './discover.scss'
import { ListItem } from '@material-ui/core';
import { Category } from '@material-ui/icons';



export class CategoryItem extends Component {
  render() {
    return (
      <div>
        <ListItem>
        <img className="category-image" width="100px" src={this.props.category.image} alt={this.props.category.name} />
          {this.props.category.name}
        </ListItem>
      </div>
    )
  }
}


export default class Discover extends Component {

  render() {
    const categoryData = [
      {name: 'Electronics', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fvideos%2Frandom-access-memory&psig=AOvVaw3aH7jVYQgHxCCEFO0-B7Vg&ust=1605387386408000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjzgpm0gO0CFQAAAAAdAAAAABAD'},
      {name: 'Toys'},
      {name: 'Books'},
      {name: 'Electronics'},
      {name: 'Electronics'},
    ]

    const categoryItems = categoryData.map((category)=><CategoryItem category={category}/>)
    return (
      <div>
        <div className="discover">
        <div className="title-categories">Categories:</div>
        <Grid container spacing={1}>
          <Grid 
          container
          direction="column-reverse"
          justify="space-evenly"
          alignItems="stretch"
          >      
          <Paper classes={{root: "modified-paper-for-categories"}}>
          <List classes={{root: "modified-list-for-categories"}}>
            {categoryItems}
          </List>
          </Paper>
            
          </Grid>
        </Grid>
        </div>
      </div>
    )
  }
}
