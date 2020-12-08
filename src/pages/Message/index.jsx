import React, { Component } from 'react';
import Dashboard from '../../dashboard/Dashboard';
import MessageCard from './messageCard';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import './message.scss';

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

  container: {
    bottom: 0,
  },
  bubbleContainer: {
    width: '100%',
    display: 'flex',
  },
  bubble: {
    border: '0.5px solid black',
    borderRadius: '10px',
    margin: '5px',
    padding: '10px',
    display: 'inline-block',
  },
  bubbleWrap: {
    display: 'flex',
  },
  inputContainer:{
    display:'flex',
    justifyContent:'flex-end',
  },
  replyButton:{
    marginTop: 15,
  }
}));

export function ChatLayout() {
  const classes = useStyles();
  const dummyData = [
    {
      messageTime: '12:30',
      message: 'This should be in left',
      direction: 'left',
    },
    {
      messageTime: '12:31',
      message: 'This should be in right',
      direction: 'right',
    },
    {
      messageTime: '12:32',
      message: 'This should be in left again',
      direction: 'left',
    },
    {
      messageTime: '12:33',
      message: 'This should be in right again',
      direction: 'right',
    },
  ];

  const chatBubbles = dummyData.map((item) => (
    <div className={`${classes.bubbleContainer} ${item.direction}`}>
      <AccountCircleIcon fontSize="large" />
      <div className="classes.bubbleWrap">
        <div className={classes.bubble}>
          <div className={classes.button}>{item.message}</div>
        </div>
        <Typography color="textSecondary" className= "chatTime">
          {item.messageTime}
        </Typography>
      </div>
    </div>
  ))
  return <div className={classes.container}>{chatBubbles}</div>;
}

export default function Index() {
  const classes = useStyles();
  const examples = [
    {
      UserName: 'Beats Test',
      MessageTime: '12:30',
      Message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima consequuntur quisquam impedit ipsam delectus possimus quia officia minus similique sapiente cupiditate quasi incidunt architecto odit, aspernatur magnam veritatis blanditiis quidem.',
    },
    {
      UserName: 'Beats Test',
      MessageTime: '12:30',
      Message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima consequuntur quisquam impedit ipsam delectus possimus quia officia minus similique sapiente cupiditate quasi incidunt architecto odit, aspernatur magnam veritatis blanditiis quidem.',
    },
    {
      UserName: 'Beats Test',
      MessageTime: '12:30',
      Message:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima consequuntur quisquam impedit ipsam delectus possimus quia officia minus similique sapiente cupiditate quasi incidunt architecto odit, aspernatur magnam veritatis blanditiis quidem.',
    },
  ];

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const displayMessage = examples.map((item) => {
    return (
      <div onClick={handleOpen}>
        <MessageCard
          UserName={item.UserName}
          Message={item.Message}
          MessageTime={item.MessageTime}
        />
      </div>
    );
  });
  return (
    <Dashboard>
      <div>
        <div className="message-container">{displayMessage}</div>
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
              <ChatLayout />
              <div className={classes.inputContainer}>
                <TextField id='outlined-basic' label='Enter Your Message'></TextField>
                <Button className={classes.replyButton}>send</Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </Dashboard>
  );
}
