import { createSlice } from '@reduxjs/toolkit';


export const initialState = {
  station:[],
  stationUrl:'',
  playing: true,
  stoped: false,
  spinner:false,
};
const PlayingSlice = createSlice({
  name: 'play',
  initialState,
  reducers: {
    stationAdd: (state, action) => {
      state.station=action.payload
      state.stationUrl=action.payload.url_resolved
    },
    pauseStation:(state,action)=>{
      state.stoped=true
      state.playing=false
    },
    playStation:(state,action)=>{
      state.playing=true
      state.stoped=false
    },
    spinnerplay:(state,action)=>{
       state.spinner=true
    },
    spinnerstop:(state,action)=>{
      state.spinner=false
    }
    //  addRecent: (state, action) => {
    //   state.users.unshift(action.payload);
    //   state.loading = false;
    // },
    // recentPlaying:(state,action)=>{
    //   state.playing=action.payload;
    // },
    // activeSidebar:(state,action)=>{
    //   state.sidebar=!state.sidebar;
    // },
    // deleteRecent: (state, action) => {
    //   state.users=state.users.filter((user) => user.stationuuid !== action.payload);
    //   console.log(state.users)
    //   state.loading = false;
    // },
  },
});
export const { stationAdd,pauseStation,playStation,spinnerplay,spinnerstop} = PlayingSlice.actions;
export default PlayingSlice.reducer;