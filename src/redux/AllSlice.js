import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  station:[],
};
const AllSlice = createSlice({
  name: 'AllStation',
  initialState,
  reducers: {
    addallstation:(state,action)=>{
      state.station=action.payload
    },

  },
});
export const { addallstation} = AllSlice.actions;
export default AllSlice.reducer;