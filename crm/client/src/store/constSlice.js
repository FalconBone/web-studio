import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchDealStatuses = createAsyncThunk(
    'const/fetchDealStatuses',
    async function (_, {}) {
        
        let statuses

        await axios.get('http://localhost:5000/api/dealStatus/get')
            .then((res) => {
                console.log('\n', res);
                statuses = res.data;
            })
        return statuses
    }
)

export const fetchTimeTypes = createAsyncThunk(
    'const/fetchTimeTypes',
    async function (_, {}) {
        console.log('FETCH TIME TYPES');
        let timeTypes

        await axios.get('http://localhost:5000/api/timeType/get')
            .then((res) => {
                console.log('\nТАЙМЫ: ', res);
                timeTypes = res.data;
            })
        return timeTypes
    }
)

const constSlice = createSlice({
    name: 'consts',
    initialState: {
        dealStatuses: [],
        timeTypes: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchDealStatuses.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchDealStatuses.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.dealStatuses = action.payload
        },
        [fetchTimeTypes.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.timeTypes = action.payload
        }
    }
})

export const {} = constSlice.actions

export default constSlice.reducer