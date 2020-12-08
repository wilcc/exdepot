import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './Detail.scss';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import GavelTwoToneIcon from '@material-ui/icons/GavelTwoTone';
import Dashboard from '../../dashboard/Dashboard';
import MessageModel from '../Message/messageModel';
import { NavLink } from 'react-router-dom';
import { setDetail, fetchDetail } from '../../reducers/detailreducer';
import { setMessage, createMessage } from '../../reducers/messagereducer';
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
    let listingID = window.location.pathname.split('/')[2];
    this.props.fetchDetail(listingID);
  }

  render() {
    const listingDetail = this.props.detail.listingDetail;

    //  {listingDetail.ownerUserID === this.props.currentUserID ? console.log('yes') : console.log('no')}
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
            <div onClick={
              this.props.createMessage
              }>
              <MessageModel />
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
    currentUserID: state.auth.userID,
    message: state.message,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setDetail,
      fetchDetail,
      setMessage,
      createMessage,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
