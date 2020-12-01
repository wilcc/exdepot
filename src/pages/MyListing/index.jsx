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

    const threeItemsExamples = [
      {
        ItemName: 'Beats Headphones',
        ItemBids: 12,
        ItemImage: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
      },
      {
        ItemName: 'Batman Comic',
        ItemBids: 2,
        ItemImage:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
      },
      {
        ItemName: 'Steam Controller',
        ItemBids: 8,
        ItemImage:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
      },
      {
        ItemName: 'Beats Headphones',
        ItemBids: 12,
        ItemImage: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
      },
      {
        ItemName: 'Batman Comic',
        ItemBids: 2,
        ItemImage:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
      },
      {
        ItemName: 'Steam Controller',
        ItemBids: 8,
        ItemImage:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
      },
    ];
    console.log('listing',this.props.listing.listingList)
    const displayCards = this.props.listing.listingList.map((item) => {
      return (
        <Card
          title={item.name}
          bids={item.ItemBids}
          image={item.ItemImage}
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