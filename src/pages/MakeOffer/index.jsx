import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './MakeOffer.scss';
import image1 from '../img/1.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { fetchMyListings } from '../../reducers/listingreducer';
import { bindActionCreators } from 'redux';


import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GavelTwoToneIcon from '@material-ui/icons/GavelTwoTone';
import AddBoxIcon from '@material-ui/icons/AddBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Dashboard from '../../dashboard/Dashboard';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 50,
    marginRight: 50,
  },
  media: {
    height: 200,
    width: 345,
  },
  cardActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  CardContent:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
  }

});

export function MyListCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardMedia className={classes.media} image={props.image} />
    <CardContent className={classes.CardContent}>
    <Typography gutterBottom variant="h5" component="h3">
            {props.title}
            </Typography>
            <CardActionArea onClick={props.onClick}>
          <AddBoxIcon fontSize="large"/>
          </CardActionArea>
        </CardContent>
    </Card>
  );
}
export function MyOfferCard(props) {

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent className={classes.CardContent}>
        <Typography gutterBottom variant="h5" component="h3">
        {props.title}
        </Typography>
        <CardActionArea onClick={props.RemoveOnClick}>
          <RemoveCircleIcon fontSize="large"/>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}

export class MakeOffer extends Component {

  state = {
    itemsbids: [],
  }
  async componentDidMount() {
    this.props.fetchMyListings()
  }

  async makeBidApi() {
    console.log('BEFORE This is MakeBidAPI Network Request api button')
    let listingID = window.location.pathname.split('/')[2]
    const response = await fetch(
      `http://localhost:3003/api/listingbid/createbid`,
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.authToken}`
        },
        body: {
          ListingID: listingID,
          items_bid: this.state.itemsbids,
        }
      }
    )
    console.log('AFTER This is MakeBidAPI Network Request api button')
  }

  render() {
    const listingDetail = this.props.detail.listingDetail
    const displayImages = listingDetail.images.map((item)=> <img src={item} className="sliderimg" alt="" />)
    const itemOfferedIds = this.state.itemsbids.map((item) => item._id)
    const myListings = this.props.listing.listingList.filter((item) => itemOfferedIds.indexOf(item._id) == (-1))

    
    const myListCards = myListings.map((item) => {
      return (
        <MyListCard
          title={item.name}
          image={item.images[0]}
          detail={item.description}
          listingID={item._id}
          fullItem={item}
          onClick = {() => {
            const itemsbids = [item, ...this.state.itemsbids];
            this.setState({
              itemsbids: itemsbids,
            });
          }}
        />
      );
    })
    const OfferedCard = this.state.itemsbids.map((item) => {
        return (
          <MyOfferCard
          title={item.name}
          image={item.images[0]}
          detail={item.description}
          listingID={item._id}
          fullItem={item}
          RemoveOnClick = {() => {
            const removedItemsBids = this.state.itemsbids.filter((element) => element._id !== item._id);
            this.setState({
              itemsbids: removedItemsBids,
            });
          }}
          />
        );
      })
    return (
      <Dashboard>
        <div className="container">
          <div className="offerDetail">
          <div className="offeredItem">
            <Typography className="userInfo" variant="h5" component="h3">
              Offered Items
            </Typography>
            {OfferedCard}
          </div>
          <div className="myListItem">
          <Typography className="userInfo" variant="h5" component="h3">
              My Items
            </Typography>
            {myListCards}
          </div>
          </div>
          <div className="productDetail">
            <Typography
              className="productTitle"
              variant="h5"
              component="h5"
            >
              Product Name: {listingDetail.name}
            </Typography>

            <AliceCarousel
              responsive={this.responsive}
              autoPlayInterval={2000}
              autoPlayDirection="rtl"
              autoPlay={true}
              autoHeight={true}
              fadeOutAnimation={true}
              mouseTrackingEnabled={true}
              disableAutoPlayOnAction={true}
            >
              {displayImages}
            </AliceCarousel>

            <Typography variant="h6" component="h3" className="detailTitle">
              Product Detail:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="detailBody"
            >
              {listingDetail.description}
            </Typography>
            <Typography variant="h6" component="h3" className="IWantTitle">
              What I would like to get for the item:
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="IWantBody"
            >
            {listingDetail.exchangeDescription}
            </Typography>
            <div className="button">
              <Button
                variant="contained"
                color="primary"
                startIcon={<GavelTwoToneIcon />}
                onClick={()=> {
                  this.makeBidApi()
                }}
              >
                Bid
              </Button>
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
    authToken: state.auth.token,
    listing: state.listing,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchMyListings,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MakeOffer);