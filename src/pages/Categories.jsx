import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './discover.scss'

export class CategoryItemForCategoryPage extends Component {
  render() {
    return (
          <div className="single-category-display">
            <img className="category-image" src={this.props.category.image} alt={this.props.category.name} />
              {this.props.category.name}
          </div>
    )
  }
}

export default class Categories extends Component {
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
      
    ]

    

    const categoryItemsMappedoutToDisplay = categoryData.map((category)=><CategoryItemForCategoryPage category={category}/>)
    return (
      <div>
      <h2 className="title-component-discover">Full List of Categories</h2>
      
      <Grid container spacing={6}>
      <Grid 
        item xs={12}

      >      
        <Paper elevation={5} >
          <div className="display-all-items-wrapper">
          {categoryItemsMappedoutToDisplay}
          </div>
        </Paper>
      </Grid>
      </Grid>
      </div>
    )
  }
}
