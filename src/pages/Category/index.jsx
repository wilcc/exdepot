import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './discover.scss';
import { CategoryItem } from '../Discover';
import MyListing from '../MyListing';
import Dashboard from '../../dashboard/Dashboard';

export default class Categories extends Component {
  render() {
    const categoryData = [
      {
        name: 'Toys',
        image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg',
      },
      {
        name: 'Furniture',
        image:
          'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg',
      },
      {
        name: 'Miscellaneous',
        image:
          'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg',
      },
      {
        name: 'Electronics',
        image:
          'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg',
      },
      {
        name: 'Books',
        image:
          'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg',
      },
      {
        name: 'Toys',
        image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg',
      },
      {
        name: 'Furniture',
        image:
          'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg',
      },
      {
        name: 'Miscellaneous',
        image:
          'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg',
      },
      {
        name: 'Electronics',
        image:
          'https://thumbs.dreamstime.com/z/cool-sharpen-electronics-15263.jpg',
      },
      {
        name: 'Books',
        image:
          'https://thumbs.dreamstime.com/z/library-many-shelves-books-library-many-shelves-books-diminishing-perspective-shallow-dof-159717386.jpg',
      },
      {
        name: 'Toys',
        image: 'https://thumbs.dreamstime.com/z/toys-collection-24515711.jpg',
      },
      {
        name: 'Furniture',
        image:
          'https://thumbs.dreamstime.com/z/natural-scandinavian-living-room-interior-wooden-furniture-mockup-picture-empty-white-wall-154024411.jpg',
      },
      {
        name: 'Miscellaneous',
        image:
          'https://thumbs.dreamstime.com/z/flea-market-brugge-belgium-bronze-baby-shoes-70263835.jpg',
      },
    ];

    const categoryItemsMappedoutToDisplay = categoryData.map((category) => (
      <CategoryItem category={category} />
    ));
    return (
      <Dashboard>
        <div>
          <h2 className="title-component-discover">Full List of Categories</h2>

          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Paper elevation={5}>
                <div className="display-all-items-wrapper">
                  {categoryItemsMappedoutToDisplay}
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <h2 className="title-component-discover">
                Items in Selected Category
              </h2>
              <Paper elevation={5}>
                <div className="display-all-items-wrapper">
                <p>Placeholder data here for all the available items in cards</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Dashboard>
    );
  }
}
