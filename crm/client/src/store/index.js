import {configureStore} from '@reduxjs/toolkit'
import dealSlice from './dealSlice'
import clientSlice from './clientSlice'
import userSlice from './userSlice'
import applicationSlice from './applicationSlice'
import constSlice from './constSlice'
import productSlice from './productSlice'
import positionSlice from './positionSlice'

export default configureStore({
    reducer: {
        deals: dealSlice,
        clients: clientSlice,
        users: userSlice,
        applications: applicationSlice,
        consts: constSlice,
        products: productSlice,
        positions: positionSlice
    }
})