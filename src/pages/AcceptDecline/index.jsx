import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './AcceptDecline.scss';
import image1 from '../img/1.jpg';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
});

export function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="p">
            {props.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default class AcceptDecline extends Component {
  render() {
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
    const displayCards = threeItemsExamples.map((item) => {
      return (
        <MediaCard
          title={item.ItemName}
          image={item.ItemImage}
          detail={item.detail}
        />
      );
    });
    return (
      <div className="container">
        <div className="offerDetail">
          <Typography className="userInfo" variant="h5" component="h3">
            <AccountCircleIcon />
            User Name
          </Typography>
          {displayCards}
        </div>
        <div className="productDetail">
          <Typography
            className="productTitle"
            variant="body2"
            color="textSecondary"
            component="h3"
          >
            Product Name
          </Typography>
          <img
            src={image1}
            alt=""
            width="600px"
            height="300px"
            className="image"
          />
          <Typography variant="h6" component="h3" className="detailTitle">
            Product Detail:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="detailBody"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            vitae soluta totam nulla laborum quo asperiores. Ratione facilis,
            alias eligendi fugiat neque dolorem itaque odio sed dignissimos,
            distinctio ipsa esse.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            vitae soluta totam nulla laborum quo asperiores. Ratione facilis,
            alias eligendi fugiat neque dolorem itaque odio sed dignissimos,
            distinctio ipsa esse.
          </Typography>
          <div className="button">
            <Button variant="outlined" color="primary">
              Decline
            </Button>
            <Button variant="contained" color="primary">
              Accept
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
