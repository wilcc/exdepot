import React,{component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import image1 from './img/1.jpg';
import './card.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default class MediaCard extends component {
  constructor(){
    super()
  }
  render(){
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Beats Headphone
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bids: 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-action-buttons">
        <Button size="small" color="primary">
          {<EditIcon/>}
        </Button>
        <Button size="small" color="primary">
          {<DeleteForeverIcon/>}
        </Button>
      </CardActions>
    </Card>
  );
  }
}