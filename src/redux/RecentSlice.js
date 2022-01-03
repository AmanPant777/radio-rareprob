import { createSlice } from '@reduxjs/toolkit';

const data=JSON.parse(localStorage.getItem('Recent'))

export const initialState = {
  users:data?data:[],
  playing:'',
  loading: false,
  error: false,
  sidebar:false,
  playlist:false
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getRecent: (state, action) => {
      state.users = action.payload;
      state.loading = true;
      state.error = false;
    },
     addRecent: (state, action) => {
       if(state.users.length>5){
         state.users=state.users.slice(0,5)
       }
      state.users.unshift(action.payload);
      state.loading = false;
    },
    recentPlaying:(state,action)=>{
      state.playing=action.payload;
    },
    activeSidebar:(state,action)=>{
      state.sidebar=!state.sidebar;
    },
    removeSidebar:(state,action)=>{
      state.sidebar=false
    },
    deleteRecent: (state, action) => {
      state.users=state.users.filter((user) => user.stationuuid !== action.payload);
      console.log(state.users)
      state.loading = false;
    },
    switchPlaylist:(state,action)=>{
      state.playlist=true
    },
    switchPlaylistFalse:(state,action)=>{
      state.playlist=false
    }
  },
});
export const { addRecent, deleteRecent,removeSidebar, getRecent,recentPlaying ,activeSidebar,switchPlaylist,switchPlaylistFalse} = userSlice.actions;
export const selectUser=(state)=>state.user.user;
export default userSlice.reducer;