import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchDeals = createAsyncThunk(
    'deals/fetchDeals',
    async function () {
        let deals;

        await axios.post('http://localhost:5000/api/deal/get')
            .then((res) => {
                console.log(res);
                deals = res.data;
            })
        return deals
    }
)

export const changeSettings = createAsyncThunk(
    '/deals/changeSettings',
    async function (settings) {
        return settings
    }
)

const dealsSlice = createSlice({
    name: 'deals',
    initialState: {
        //name, client, statuses, dealType, years, months, managers
        settings: {
            name: '',
            client: '',
            status: null,
            dealType: null,
            year: null,
            month: null,
            managers: null
        },
        deals: [],
        status: null,
        error: null
    },
    reducers: {
        addDeal(state, action) {
            state.deals.push({
                name: action.payload.name
            })
        }
    },
    extraReducers: {
        [fetchDeals.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchDeals.fulfilled]: (state, action) => {
            console.log(action);
            state.status = 'resolved'
            state.deals = action.payload
        },
        [fetchDeals.rejected]: (state, action) => {
            
        }
    }
})

export const {addDeal} = dealsSlice.actions

export default dealsSlice.reducer