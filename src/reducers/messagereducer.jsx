import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const createMessage= createAsyncThunk(
  'createMessage',
  async (args, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    const fetchUrl = 'http://localhost:3003/api/message/createmessage';
    const response = await fetch(fetchUrl, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          user1ID : 'new111111',
          user1Name: 'test11111',
          user2ID: 'second1111111',
          user2Name: 'user21111'
      }),
      }
      );
      let jsondata = await response.json();
      return jsondata.savedMessage
    }
  );


export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messageList: [],
  },
  reducers: {
    setMessage: (state, { payload }) => {
      state.messageList = payload.messageList;
    },
  },
  extraReducers: {
    [createMessage.fulfilled]: (state, action) => {
      state.messageList = action.payload;
    },
  },
});
export const { setMessage} = messageSlice.actions;