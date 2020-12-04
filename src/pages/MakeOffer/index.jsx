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
            <CardActionArea onClick={() => {
              
            }}>
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
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent className={classes.CardContent}>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
        <RemoveCircleIcon fontSize="large"/>
        </CardContent>
      </CardActionArea>
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

  render() {
    const listingDetail = this.props.detail.listingDetail
    const displayImages = listingDetail.images.map((item)=> <img src={item} className="sliderimg" alt="" />)
    const threeItemsExamples = [
      {
        ItemName: 'Beats Headphones',
        detail: 'productdetail',
        ItemImage: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
      },
      {
        ItemName: 'Batman Comic',
        detail: 'productdetail',
        ItemImage:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
      },
      {
        ItemName: 'Steam Controller',
        detail: 'productdetail',
        ItemImage:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
      },
    ];
    const myListCards = this.props.listing.listingList.map((item) => {
      return (
        <MyListCard
          title={item.name}
          image={item.images[0]}
          detail={item.description}
          listingID={item._id}
          fullItem={item}
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
          />
        );
      })
    console.log('this is MakeOffer props', this.props);
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