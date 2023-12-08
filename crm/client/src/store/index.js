import {configureStore} from '@reduxjs/toolkit'
import dealSlice from './dealSlice'
import clientSlice from './clientSlice'
import userSlice from './userSlice'
import applicationSlice from './applicationSlice'
import constSlice from './constSlice'

export default configureStore({
    reducer: {
        deals: dealSlice,
        clients: clientSlice,
        users: userSlice,
        applications: applicationSlice,
        consts: constSlice
    }
})