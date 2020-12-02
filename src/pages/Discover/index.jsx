import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import './discover.scss';
import { ListItem } from '@material-ui/core';
import Dashboard from '../../dashboard/Dashboard';
import Button from '@material-ui/core/Button';
import { setCategoryList, setCategoryPopularList } from '../../reducers/categoryreducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class CategoryItem extends Component {
  render() {
    return (
      <div className="single-category-display">
        <img
          className="category-image"
          src={this.props.category.image}
          alt={this.props.category.CategoryName}
        />
        {this.props.category.CategoryName}
      </div>
    );
  }
}

class MidSectionDiscover extends Component {
  

  render() {

  
    const threeItemsExamples = [
      {
        ListItemTitle: 'Beats Headphones',
        listItemImg: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
      },
      {
        ListItemTitle: 'Batman #497: The breaking of the Bat',
        listItemImg:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
      },
      {
        ListItemTitle: 'Steam Controller',
        listItemImg:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
      },
    ];
    const {
      titleMidSectionIndividual,
      listItemImg,
      ListItemTitle,
    } = this.props;
    return (
      <Grid item xs={4}>
        <h2 className="title-component-discover">
          {titleMidSectionIndividual}
        </h2>
        <Paper elevation={5}>
          <List>
          <Button href="/prodetail/someProductIDNum">
              <ListItem classes={{ root: 'list-items-midsection-discover' }}>
              <img
              className="item-image"
              src={threeItemsExamples[0].listItemImg}
              alt="..."
              />
              <div className="listItem-midsection-title">
              {threeItemsExamples[0].ListItemTitle}
              </div>
              <BookmarkBorderIcon />
              </ListItem>
          </Button>
          <Button href="/prodetail/someProductIDNum">
              <ListItem classes={{ root: 'list-items-midsection-discover' }}>
                <img
                  className="item-image"
                  src={threeItemsExamples[1].listItemImg}
                  alt="..."
                />
                <div className="listItem-midsection-title">
                  {threeItemsExamples[1].ListItemTitle}
                </div>
                <BookmarkBorderIcon />
              </ListItem>
            </Button>
            <Button href="/prodetail/someProductIDNum">
              <ListItem classes={{ root: 'list-items-midsection-discover' }}>
                <img
                  className="item-image"
                  src={threeItemsExamples[2].listItemImg}
                  alt="..."
                />
                <div className="listItem-midsection-title">
                  {threeItemsExamples[2].ListItemTitle}
                </div>
                <BookmarkBorderIcon />
              </ListItem>
            </Button>
          </List>
        </Paper>
      </Grid>
    );
  }
}

class Discover extends Component {

  async componentDidMount() {
    const response = await fetch(
      'http://localhost:3003/api/categories/fetchallCategories',
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
    // console.log("categoryList from the server", jsondata.fetchallCategories)
    this.props.setCategoryList({categoryList: jsondata.fetchallCategories})

    const responsePopular = await fetch(
      'http://localhost:3003/api/categories/fetcpopularcategoriesfour',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let jsondataPopular = await responsePopular.json();
    // console.log("categoryList from the server", jsondata.fetchallCategories)
    this.props.setCategoryPopularList({categoryPopularList: jsondataPopular.fetchPopularCategoriesSlicedFour})
  }


  render() {
    const categoryData = [
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

    const categoryItems = this.props.categoryPopularList.map((category) => (
      <CategoryItem category={category} />
    ));

    return (
      <Dashboard>
        <div>
          <div className="discover">
            <h2 className="title-component-discover">Popular Categories:</h2>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Paper elevation={5}>
                  <div className="display-all-items-wrapper">{categoryItems}</div>
                </Paper>
              </Grid>
            </Grid>

            <Grid container spacing={6}>
              <MidSectionDiscover titleMidSectionIndividual="Popular" />
              <MidSectionDiscover titleMidSectionIndividual="Ending Soon" />
              <MidSectionDiscover titleMidSectionIndividual="Suggested For you" />
            </Grid>
          </div>
        </div>
      </Dashboard>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categoryList,
    categoryPopularList: state.category.categoryPopularList,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCategoryList,setCategoryPopularList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Discover);
