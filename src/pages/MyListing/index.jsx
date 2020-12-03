import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from './Card';
import CreateIcon from '@material-ui/icons/Create';
import './MyListing.scss';
import Dashboard from '../../dashboard/Dashboard';
import { setListing } from '../../reducers/listingreducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class MyListing extends Component {
  constructor(props){
    super(props)
    this.state={
      listing: {},
    }
  }

  async componentDidMount() {
    const response = await fetch(
      'http://localhost:3003/api/listings/fetchownerlisting',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.authToken}`
        },
      }
    );
    let jsondata = await response.json();
    this.props.setListing({listingList: jsondata.ownerListing})
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
      setListing,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MyListing);