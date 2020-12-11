import { combineReducers } from 'redux'
import { authSlice } from './authreducer.jsx'
import { categorySlice } from './categoryreducer.jsx'
import { listingSlice} from './listingreducer.jsx'
import { currBidsSlice } from './currbidsreducer.jsx'
import { watchSlice } from './watchreducer.jsx'
import { detailSlice } from './detailreducer'
import { messageSlice} from './messagereducer'
import { SellerBiddedOnBidsItemsSlice } from './sellerbiddedonbidsitemsreducer'

export default combineReducers({
  auth: authSlice.reducer,
  category: categorySlice.reducer,
  listing: listingSlice.reducer,
  currbids: currBidsSlice.reducer,
  watch: watchSlice.reducer,
  detail: detailSlice.reducer,
  message: messageSlice.reducer,
  sellerbiddedonbids: SellerBiddedOnBidsItemsSlice.reducer,

})