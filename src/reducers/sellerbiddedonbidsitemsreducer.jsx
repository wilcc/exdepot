import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchOtherUsersBidsOnMyListing = createAsyncThunk(
  'fetchOtherUsersBidsOnMyListing',
  async (args, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const fetchUrl = 'http://localhost:3003/api/listingbid/fetchotherusersbidsonmylisting';
    const response = await fetch(
      fetchUrl,
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
    let jsondata = await response.json();
    console.log('neeed this route to work', jsondata)
    return jsondata
  }
);


export const SellerBiddedOnBidsItemsSlice = createSlice({
  name: 'sellerbiddedonbids',
  initialState: {
    sellerbiddedonbidsitems: []
  },
  reducers: {
    setSellerBiddedOnBidsItems: (state, { payload }) => {
      state.sellerbiddedonbidsitems = payload.sellerbiddedonbidsitems
    },
  },
  extraReducers: {
    [fetchOtherUsersBidsOnMyListing.fulfilled]: (state, action) => {
      state.sellerbiddedonbidsitems = action.payload;
    },
  },
})
export const { setSellerBiddedOnBidsItems } = SellerBiddedOnBidsItemsSlice.actions