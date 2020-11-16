import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './discover.scss'
import { ListItem } from '@material-ui/core';




export class CategoryItem extends Component {
  render() {
    return (


          <div className="single-category-display">
          
          <img className="category-image" src={this.props.category.image} alt={this.props.category.name} />
            {this.props.category.name}
          
          </div>


    )
  }
}


export default class Discover extends Component {

  render() {
    const categoryData = [
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      
    ]

    const categoryItems = categoryData.map((category)=><CategoryItem category={category}/>)

    return (
      <div>
        <div className="discover">
        <h2 className="title-component-discover">Popular Categories:</h2>
        <Grid container spacing={6}>
          <Grid 
            item xs={12}

          >      
            <Paper elevation={5} >
              <div className="display-all-items-wrapper">
              {categoryItems}
              </div>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={6}>
        <Grid 
        item xs={4}
        
        >      
        <h2 className="title-component-discover">Popular</h2>
            <Paper elevation={5} >
            <List>
            <ListItem>
            <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
            Cool PCB for LED Controls
            </ListItem>
            <ListItem>
            <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
            Cool PCB for LED Controls
            </ListItem>
            <ListItem>
            <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
            Cool PCB for LED Controls
            </ListItem>
            
            </List>
            </Paper>
          </Grid>

          <Grid 
          item xs={4}

        >      
        <h2 className="title-component-discover">Ending Soon</h2>
          <Paper elevation={5} >
          <List>
          <ListItem>
          <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
          Cool PCB for LED Controls
          </ListItem>
          <ListItem>
          <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
          Cool PCB for LED Controls
          </ListItem>
          <ListItem>
          <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
          Cool PCB for LED Controls
          </ListItem>
          
          </List>
          </Paper>
        </Grid>

        <Grid 
        item xs={4}

      >      
      <h2 className="title-component-discover">Suggested for you</h2>
        <Paper elevation={5} >
        <List>
        <ListItem>
        <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
        Cool PCB for LED Controls
        </ListItem>
        <ListItem>
        <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
        Cool PCB for LED Controls
        </ListItem>
        <ListItem>
        <img className="item-image" src="https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg" alt="..." />
        Cool PCB for LED Controls
        </ListItem>
        
        </List>
        </Paper>
      </Grid>
        </Grid>


        </div>
      </div>
    )
  }
}



// classes={{root: "modified-grid-for-categories"}}
// classes={{root: "modified-paper-for-categories"}}
// classes={{root: "modified-list-for-categories"}}