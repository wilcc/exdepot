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
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

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
  cardTitle:{
    display: 'flex',
    justifyContent: 'space-between',
  }
});

export default function CategoryListCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <div className={classes.cardTitle}>
            <Typography gutterBottom variant="h5" component="h3">
              {props.title}
            </Typography>
            {/* <div>
              <BookmarkIcon onClick={async (e,value) => {
              const response = await fetch(
                'http://localhost:3003/api/watchlist/add',
                {
                  method: 'POST',
                  mode: 'cors',
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.props.authToken}`
                  },
                  body: JSON.stringify({

                  }),
                }
              );
              let jsondata = await response.json();
              console.log('request from fe', jsondata);
            }}/>
            </div> */}
          </div>
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
