import React, { Component } from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import Dashboard from '../../dashboard/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import './CreateNewListing.scss';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { setCategoryList } from '../../reducers/categoryreducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CreateNewListing extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }


  async componentDidMount() {
    const response = await fetch(
      'http://localhost:3003/api/categories/fetchAllCategories',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    let jsondata = await response.json();
    console.log("categoryList from the server", jsondata.fetchallCategories)
    this.props.setCategoryList({categoryList: jsondata.fetchallCategories})
  }

  render(){
    const demoCategories = [
      {catName: 'Electronics'},
      {catName: 'DIY parts'},
      {catName: 'toys'},
      {catName: 'accessories'},
      {catName: 'gardening'}
    ]
    return (
      <Dashboard>
      <div className="create-listing-container">
      
        <div className="images-upload-wrapper">

          <DropzoneArea
            filesLimit={24}
            maxFileSize={250000000}
            onChange={this.handleChange.bind(this)}
            />
        </div>
          <div className="input-container">
          <TextField classes={{root: 'text-area-styling'}} label="Item Name" variant="outlined" />
          <h4 className="title-for-text-input">Item Description:</h4>
            <TextareaAutosize className="text-area-styling" id="outlined-basic" aria-label="item description" rowsMin={8} placeholder="Description of the item you're trying to give for some other item from another person" />
          </div>
          
          <div className="input-container">
          <TextField classes={{root: 'text-area-styling'}} label="Item Name" variant="outlined" />
          <h4 className="title-for-text-input">What I want for this this item:</h4>
            <TextareaAutosize className="text-area-styling" id="outlined-basic" aria-label="item description" rowsMin={8} placeholder="say what you would like to trade it with " />
          </div>
          <Autocomplete
          id="combo-box-demo"
          options={this.props.categoryList}
          getOptionLabel={(option) => option.CategoryName}
          style={{ width: 400 }}
          renderInput={(params) => <TextField {...params} label="Pick Category" variant="outlined" />}
        />
        
      </div>
      </Dashboard>
    )
  }
}

// export default CreateNewListing;


const mapStateToProps = (state) => {
  return {
    categoryList: state.category.categoryList,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCategoryList,
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(CreateNewListing);