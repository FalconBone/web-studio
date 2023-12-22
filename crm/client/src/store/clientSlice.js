import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchClients = createAsyncThunk(
    'deals/fetchClients',
    async function (_, {}) {
        let clients

        await axios.get('http://localhost:5000/api/client/getAll')
            .then((res) => {
                clients = res.data;
            })
        return clients
    }
)

const clientSlice = createSlice({
    name: 'clients',
    initialState: {
        //clients
        clients: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchClients.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchClients.fulfilled]: (state, action) => {
            console.log('action: ', action);
            state.status = 'resolved'
            state.clients = action.payload
        }
    }
})

export const {} = clientSlice.actions

export default clientSlice.reducer