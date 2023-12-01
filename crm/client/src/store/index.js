import {configureStore} from '@reduxjs/toolkit'
import dealSlice from './dealSlice'

export default configureStore({
    reducer: {
        deals: dealSlice
    }
})