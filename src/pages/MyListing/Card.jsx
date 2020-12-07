import React from 'react';
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
import {NavLink} from 'react-router-dom'

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

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <NavLink
          to={`/prodetail/${props.listingID}`}
          listingID={props.listingID}
        >
          <CardMedia className={classes.media} image={props.image} />
        </NavLink>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bids:{props.bids}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionButtons}>
        <Button size="small" color="primary">
          {<EditIcon />}
        </Button>
        <Button size="small" color="primary">
          {<DeleteForeverIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
