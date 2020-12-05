import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from './Card';
import CreateIcon from '@material-ui/icons/Create';
import './MyListing.scss';
import Dashboard from '../../dashboard/Dashboard';
import { fetchMyListings } from '../../reducers/listingreducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class MyListing extends Component {

  async componentDidMount() {
    this.props.fetchMyListings()
  }
  render() {
    const displayCards = this.props.listing.listingList.map((item) => {
      return (
        <Card
          title={item.name}
          bids={item.ItemBids}
          image={item.images[0] ? item.images[0] : "https://media.istockphoto.com/photos/single-cloud-central-in-blue-sky-picture-id667409780"}
        />
      );
    });
    return (
      <Dashboard>
        <div>
          <div className="create-button">
            <Button
              variant="contained"
              color="primary"
              startIcon={<CreateIcon />}
            >
              Create New
            </Button>
          </div>
          <div className="cards">{displayCards}</div>
        </div>
      </Dashboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
    authToken: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMyListings,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MyListing);