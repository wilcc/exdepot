import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MyListing from '../MyListing';
import CreateIcon from '@material-ui/icons/Create';
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import CancelIcon from '@material-ui/icons/Cancel';
import Badge from '@material-ui/core/Badge';
import { Message } from '@material-ui/icons';
import Dashboard from '../../dashboard/Dashboard';
const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginBottom: 50,
    marginRight: 50,
  },
  media: {
    height: 200,
    width: 345,
  },
});

export function CardItemIbidWith(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Typography gutterBottom variant="h6" component="h6">
          Blue Yeti Microphone
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://c1.neweggimages.com/ProductImageCompressAll1280/36-431-024-05.jpg"
        />
      </CardActionArea>
    </Card>
  );
}

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
          <Typography variant="body2" color="textSecondary" component="p">
            Bids:{props.bids}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Status:{props.status}
          </Typography>
        </CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          Items I bid with:
        </Typography>
        <CardItemIbidWith />
      </CardActionArea>
      <CardActions className="card-action-buttons">
        <Button size="small" color="primary">
          {<PersonIcon />} UserNameHere
        </Button>
        <Button size="small" color="primary">
          <Badge badgeContent={4} color="secondary">
            {<MessageIcon />}
          </Badge>
        </Button>
        <Button size="small" color="secondary">
          {<CancelIcon />} Cancel Bid
        </Button>
      </CardActions>
    </Card>
  );
}
export class CurrentBidsCards extends Component {
  render() {
    const threeItemsExamples = [
      {
        ItemName: 'Beats Headphones',
        ItemBids: 12,
        ItemImage: 'https://www.adorama.com/images/Large/btmx422lla.jpg',
        status: 'pending',
      },
      {
        ItemName: 'Batman Comic',
        ItemBids: 2,
        ItemImage:
          'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Batman497.png/220px-Batman497.png',
        status: 'active',
      },
      {
        ItemName: 'Steam Controller',
        ItemBids: 8,
        ItemImage:
          'https://cdn.vox-cdn.com/thumbor/4D03ejrdgThqKAZHz084ody4dBQ=/0x0:2040x1530/920x0/filters:focal(0x0:2040x1530):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19411304/shollister_191126_steam_controller_103959__2_.jpg',
        status: 'pending',
      },
    ];
    const displayCards = threeItemsExamples.map((item) => {
      return (
        <MediaCard
          title={item.ItemName}
          bids={item.ItemBids}
          image={item.ItemImage}
          status={item.status}
        />
      );
    });
    return (
      <div>
        <div className="cards">{displayCards}</div>
      </div>
    );
  }
}

export function MediaCardAcceptedHistory(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bids:{props.bids}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Status:{props.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action-buttons">
        <Button size="small" color="primary">
          {<PersonIcon />} UserNameHere
        </Button>
        <Button size="small" color="primary">
          {<MessageIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}

export class AcceptedBidsCards extends Component {
  render() {
    const threeItemsExamples = [
      {
        ItemName: 'SoundLink Bose Speaker',
        ItemBids: 22,
        ItemImage:
          'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_color_ii/product_silo_images/soundlink_color_ii_red_EC.psd/_jcr_content/renditions/cq5dam.web.320.320.png',
        status: 'accepted',
      },
      {
        ItemName: 'Automate The Boring Stuff with Python',
        ItemBids: 2,
        ItemImage:
          'https://automatetheboringstuff.com/images/automate_2e_cover.png',
        status: 'accepted',
      },
      {
        ItemName: 'Samurai Warrior Figurine',
        ItemBids: 4,
        ItemImage:
          'https://static.lladro.com/media/catalog/product/cache/9a0e182083c7c5b80c6d12079a53d350/4/6/460662e1c0dd9424451b0a72c591ff92b643b5dd5dd362847e982e45e7fb08f6cb20e2f0452702cc2764d10b2efbc02fd63f3b4e98718b6ca578cab91be67ac6.jpg',
        status: 'accepted',
      },
    ];
    const displayCards = threeItemsExamples.map((item) => {
      return (
        <MediaCardAcceptedHistory
          title={item.ItemName}
          bids={item.ItemBids}
          image={item.ItemImage}
          status={item.status}
        />
      );
    });
    return (
      <div>
        <div className="cards">{displayCards}</div>
      </div>
    );
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStylesForTabs = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CurrentBids() {
  const classes = useStylesForTabs();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dashboard>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Active" {...a11yProps(0)} />
          <Tab label="Accepted" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        This is Example of Active items
        <CurrentBidsCards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        This is Example of Accepted items
        <AcceptedBidsCards />
      </TabPanel>
    </div>
    </Dashboard>
  );
}
