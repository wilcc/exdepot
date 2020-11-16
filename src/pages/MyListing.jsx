import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from './Card';
import CreateIcon from '@material-ui/icons/Create';

export default class MyListing extends Component {
  render() {
    return (
      <div>
        <div className="create-button">
          <Button
            variant="contained"
            color="primary"
              startIcon={<CreateIcon/>}
          >
            Create New
          </Button>
        </div>
        <Card />
      </div>
    );
  }
}
