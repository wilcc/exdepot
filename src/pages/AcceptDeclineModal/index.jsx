import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '50%',
  },
  root: {
    width: 'auto',
    marginBottom: 10,
  },
  media: {
    height: 80,
    width: 150,
  },
  cardActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  imageCard: {
    display: 'flex',
    flexDirection: 'row',
  },
  bidItem: {
    marginLeft: 5,
  },
  offerDetail: {
    height: 800,
    overflowY: 'scroll',
  },
}));

export function ImageCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.bidItem}>
      <CardMedia className={classes.media} image={props.image} />
      <Typography variant="body2" color="textSecondary" component="p">
        {props.name}
      </Typography>
    </div>
  );
}

export function MediaCard(props) {
  const classes = useStyles();

  const individualItem = props.bidItem.map((item) => {
    return <ImageCard image={item.ItemImage} name={item.ItemName} />;
  });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            <AccountCircleIcon />
            {props.title}
          </Typography>
          <Typography variant="h9">Items Bid With:</Typography>
          <div className={classes.imageCard}>{individualItem}</div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionButtons}>
        <Button variant="outlined" color="primary">
          Decline
        </Button>
        <Button variant="contained" color="primary">
          Accept
        </Button>
      </CardActions>
    </Card>
  );
}

const UserExample = [
  {
    UserName: 'User1',
    BidItem: [
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
    ],
  },
  {
    UserName: 'User2',
    BidItem: [
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
    ],
  },
  {
    UserName: 'User2',
    BidItem: [
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
    ],
  },
  {
    UserName: 'User2',
    BidItem: [
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
    ],
  },
];

const displayUser = UserExample.map((user) => {
  return <MediaCard title={user.UserName} bidItem={user.BidItem} />;
});

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log("AcceptDeclineModal log TransitionsModal", props)
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        {`Bids: ${props.bidCount}`}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Item Bids</h2>
            <div className={classes.offerDetail}>{displayUser}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
