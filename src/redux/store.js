import { configureStore } from '@reduxjs/toolkit'
import AllSlice from './AllSlice'
import PlayingSlice from './PlayingSlice'
import userSlice from './RecentSlice'
export default configureStore({
    reducer: {
        user:userSlice,
        playing:PlayingSlice,
        all:AllSlice
    }
})