import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './discover.scss'
import { ListItem } from '@material-ui/core';




export class CategoryItem extends Component {
  render() {
    return (
      <div>
        <ListItem classes={{root: "single-category-display-listItem"}}>
          <div className="single-category-display">
          
          <img className="category-image" src={this.props.category.image} alt={this.props.category.name} />
            {this.props.category.name}
          
          </div>
        </ListItem>
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
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},
      {name: 'Books', image: 'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg'},
      {name: 'Toys', image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg'},
      {name: 'Furniture', image: 'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg'},
      {name: 'Miscellaneous', image: 'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg'},
      {name: 'Electronics', image: 'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg'},

      
    ]

    const categoryItems = categoryData.map((category)=><CategoryItem category={category}/>)

    return (
      <div>
        <div className="discover">
        <div className="title-categories">Categories:</div>
        <Grid container spacing={1}>
          <Grid 
            item xs={12}
            classes={{root: "modified-grid-for-categories"}}
          >      
            <Paper elevation={5} classes={{root: "modified-paper-for-categories"}}>
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
