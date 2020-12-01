import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import './discover.scss';
// import { CategoryItem } from '../Discover';
import MyListing from '../MyListing';
import Dashboard from '../../dashboard/Dashboard';
import Card from './Card';
import { setCategoryList } from '../../reducers/categoryreducer';
import { setListing } from '../../reducers/listingreducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CategoryItem extends Component {
  constructor(props){
    super(props)
    this.state={
      category:{},
      listing:{}
    }
  }
  render() {

    return (
      <div className="single-category-display">
        <img
          className="category-image"
          src={this.props.category.image}
          alt={this.props.category.name}
          onClick={async () => {
            const response = await fetch(
              `http://localhost:3003/api/listings/fetchcategorylisting/${this.props.category._id}`,
              {
                method: 'GET',
                mode: 'cors',
                credentials: 'same-origin',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${this.props.authToken}`,
                },
              }
            );
            let jsondata = await response.json();
            this.props.setListing({ listingList: jsondata.categoryListing });
          }}
        />
        {this.props.category.CategoryName}
      </div>
    );
  }
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {},
      listing: {},
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'http://localhost:3003/api/categories/fetchAllCategories',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let jsondata = await response.json();
    this.props.setCategoryList({ categoryList: jsondata.fetchallCategories });
  }

  render() {
    const displayCards = this.props.listing.listingList.map((item) => {
      return (
        <Card
          title={item.name}
          bids={item.ItemBids}
          image={item.ItemImage}
        />
      );
    });
    const categoryItemsMappedoutToDisplay = this.props.categoryList.map(
      (category) => {
        return <CategoryItem category={category} setListing={this.props.setListing}/>;
      }
    );
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
                <div className="cards">{displayCards}</div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Dashboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categoryList,
    listing: state.listing,
    authToken: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setListing,
      setCategoryList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
