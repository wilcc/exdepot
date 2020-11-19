import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Badge from '@material-ui/core/Badge';

import './message.scss';

const useStyles = makeStyles({
  root: {
    marginBottom: 50,
    marginRight: 50,
  },

  cardActionButtons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  user: {
    display: 'flex',
  },
  userIcon:{
      marginRight: 20
  }
});

export default function MessageCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <div className={classes.title}>
            <div className={classes.user}>
              <AccountCircleIcon className={classes.userIcon}/>
              <Typography gutterBottom variant="h6" component="h3">
                {props.UserName}
              </Typography>
            </div>
          <Badge badgeContent={4} color="secondary"  />
          </div>
          <Typography color="textSecondary">
            Last Received:{props.MessageTime}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Message}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
