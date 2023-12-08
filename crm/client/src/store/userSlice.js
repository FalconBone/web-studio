import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'deals/fetchUsers',
    async function () {
        let users

        await axios.get('http://localhost:5000/api/user/getUsers')
            .then((res) => {
                console.log(res);
                users = res.data;
            })
        return users
    }
)

export const fetchOneUser = createAsyncThunk(
    'clients/fetchOneClient',
    async function (id, {getState}) {
        const client = getState().clients.managers.find(client => client.id === id)
        
        return client
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        //managers
        users: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchUsers.fulfilled]: (state, action) => {
            console.log(action);
            state.status = 'resolved'
            state.users = action.payload
        }
    }
})

export const {} = userSlice.actions

export default userSlice.reducer