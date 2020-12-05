import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image1 from '../img/1.jpg';
import image2 from '../img/2.jpg';
import image3 from '../img/3.jpg';
import image4 from '../img/4.jpg';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './Detail.scss';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import GavelTwoToneIcon from '@material-ui/icons/GavelTwoTone';
import Dashboard from '../../dashboard/Dashboard';
import { NavLink } from 'react-router-dom';
import { setDetail, fetchDetail } from '../../reducers/detailreducer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingDetail: {},
    };
  }

  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };

  async componentDidMount() {

    // this.props.fetchDetail();

    let listingID = window.location.pathname.split('/')[2]
    const response = await fetch(
      `http://localhost:3003/api/listings/fetchone/${listingID}`,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.authToken}`
        },
      }
    )
    let jsondata = await response.json();
    this.props.setDetail({listingDetail: jsondata.oneListing})
  }

  render() {
    const listingDetail = this.props.detail.listingDetail;
    if (listingDetail === null) {
      return null;
    }
    const displayImages = listingDetail.images.map((item) => (
      <img src={item} className="sliderimg" alt="" />
    ));

    return (
      <Dashboard>
        <div className="DetailContainer">
          <h2 className="head">
            {this.props.detail.listingDetail.name}
            <BookmarkBorderIcon />
            {/* <BookmarkIcon color="primary" /> */}
          </h2>
          <div className="carousel">
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
          </div>
          <div className="detail">
            <div className="title">Description:</div>
            <p>{this.props.detail.listingDetail.description}</p>
          </div>
          <div>Things I'm searching for:</div>
          <p>{this.props.detail.listingDetail.exchangeDescription}</p>
          <div className="button">
            <NavLink to={`/makeoffer/${listingDetail._id}`}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<GavelTwoToneIcon />}
              >
                Make A Bid
              </Button>
            </NavLink>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Message Owner
            </Button>
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
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setDetail,
      fetchDetail,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
