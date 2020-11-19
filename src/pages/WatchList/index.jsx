import React, { Component } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Typography from '@material-ui/core/Typography';
import GavelTwoToneIcon from '@material-ui/icons/GavelTwoTone';
import './watchList.scss';
import { NavLink } from 'react-router-dom';
import Dashboard from '../../dashboard/Dashboard';

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
          <div className="cardTitle">
            <Typography gutterBottom variant="h5" component="h3">
              {props.title}
            </Typography>
            <BookmarkIcon />
          </div>
          <Typography variant="body1" color="textPrimary" component="h3">
            Owner: {props.owner}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bids:{props.bids}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionButtons}>
        <NavLink to="/makeoffer/prodId9283dfs8902">
          <Button
            variant="contained"
            color="primary"
            startIcon={<GavelTwoToneIcon />}
          >
            Make A Bid
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

export default class WatchList extends Component {
  constructor() {
    super();
  }
  render() {
    const threeItemsExamples = [
      {
        ItemName: 'Beats Headphones',
        Owner: 'User1',
        ItemBids: 12,
        ItemImage: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
      },
      {
        ItemName: 'Batman Comic',
        Owner: 'User2',
        ItemBids: 2,
        ItemImage:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
      },
      {
        ItemName: 'Steam Controller',
        Owner: 'User3',
        ItemBids: 8,
        ItemImage:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
      },
      {
        ItemName: 'Beats Headphones',
        Owner: 'User4',
        ItemBids: 12,
        ItemImage: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
      },
      {
        ItemName: 'Batman Comic',
        Owner: 'User5',
        ItemBids: 2,
        ItemImage:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
      },
      {
        ItemName: 'Steam Controller',
        Owner: 'User6',
        ItemBids: 8,
        ItemImage:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
      },
    ];
    const displayCards = threeItemsExamples.map((item) => {
      return (
        <MediaCard
          title={item.ItemName}
          owner={item.Owner}
          bids={item.ItemBids}
          image={item.ItemImage}
        />
      );
    });
    return (
      <Dashboard>
        <div className="watch-list-container">
          <div className="heading">
            <Typography variant="h5">My Watch List</Typography>
          </div>
          <div className="card-wrapper">
            <div className="cards">{displayCards}</div>
          </div>
        </div>
      </Dashboard>
    );
  }
}
