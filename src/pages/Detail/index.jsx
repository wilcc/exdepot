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

export default class Detail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };
  render() {
    return (
      <div className="DetailContainer">
        <h2 className="head">
          Product Name
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
            <img src={image1} className="sliderimg" alt="" />
            <img src={image2} className="sliderimg" alt="" />
            <img src={image3} className="sliderimg" alt="" />
            <img src={image4} className="sliderimg" alt="" />
          </AliceCarousel>
        </div>
        <div className="detail">
          <div className="title">Description:</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            reiciendis! Reiciendis quas harum magnam mollitia perspiciatis
            accusantium delectus, minus, illo quos inventore commodi incidunt
            enim esse velit blanditiis, assumenda non.
          </p>
        </div>
        <div>Things I'm searching for:</div>
        <li>shoes</li>
        <li>headphone</li>
        <li>Lambo</li>
        <li>coin</li>
        <div className="button">
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GavelTwoToneIcon />}
          >
            Make A Bid
          </Button>
          <Button variant="contained" color="primary" startIcon={<SendIcon />}>
            Message Owner
          </Button>
        </div>
      </div>
    );
  }
}
