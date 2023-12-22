import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchApplications = createAsyncThunk(
    'deals/fetchApplications',
    async function (_, {}) {
        let applications

        await axios.get('http://localhost:5000/api/application/getApplications')
            .then((res) => {
                applications = res.data;
            })

        return applications
    }
)


const applicationSlice = createSlice({
    name: 'applications',
    initialState: {
        applications: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchApplications.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchApplications.fulfilled]: (state, action) => {
            console.log('action: ', action);
            state.status = 'resolved'
            state.applications = action.payload
        }
    }
})

export const {} = applicationSlice.actions

export default applicationSlice.reducer