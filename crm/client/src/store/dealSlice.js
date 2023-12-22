import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchDeals = createAsyncThunk(
    'deals/fetchDeals',
    async function (_, {getState}) {
        let deals;

        await axios.post('http://localhost:5000/api/deal/get', {settings: getState().deals.settings})
            .then((res) => {
                console.log(res);
                deals = res.data;
            })
        return deals
    }
)

export const changeSettings = createAsyncThunk(
    '/deals/changeSettings',
    async function (newSetting, {getState}) {
        let deals;
        let newSettings;

        newSettings = {...getState().deals.settings, ...newSetting}

        await axios.post('http://localhost:5000/api/deal/get', {settings: newSettings})
            .then((res) => {
                console.log(res);
                deals = res.data;
            })
        
        return {deals: deals, settings: newSettings}
    }
)

export const fetchDealById = createAsyncThunk(
    'deal/fetchDealById',
    async function(id) {
        let deal

        await axios.post('http://localhost:5000/api/deal/getById', {id: id})
            .then((res) => {
                deal = res.data
            })

        return deal
    }
)

export const updateDealById = createAsyncThunk(
    'deal/updateDealById',
    async function(id, {getState}) {
        let deal;
        let deals

        console.log( getState().deals.deal);
        await axios.post('http://localhost:5000/api/deal/update', {id: id, deal: getState().deals.deal})
            .then((res) => {
                deal = res.data
            })
            await axios.post('http://localhost:5000/api/deal/get', {settings: getState().deals.settings})
            .then((res) => {
                console.log(res);
                deals = res.data;
            })

        return {deal: deal, deals: deals}
    }
)

export const deleteDealById = createAsyncThunk(
    'deal/deleteDealById',
    async function(id) {
        let deal = {}


        await axios.post('http://localhost:5000/api/deal/delete', {id: id})
            .then((res) => {
                console.log(res.data);
            })

        return deal
    }
)


const dealsSlice = createSlice({
    name: 'deals',
    initialState: {
        //name, client, statuses, dealType, years, months, managers
        settings: {
            name: '',
            clientName: '',
            statuses: '',
            dealType: '',
            year: null,
            month: null,
            managers: null
        },
        deals: [],
        deal: {},
        status: null,
        error: null
    },
    reducers: {
        addDeal(state, action) {
            state.deals.push({
                name: action.payload.name
            })
        },
        changeDeal(state, action) {
            const newFields = action.payload
            
            state.deal = {...state.deal, ...newFields}
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
        [changeSettings.fulfilled]: (state, action) => {
            state.settings = action.payload.settings
            state.deals = action.payload.deals
        },
        [fetchDealById.fulfilled]: (state, action) => {
            state.deal = action.payload
        },
        [updateDealById.fulfilled] : (state, action) => {
            state.deal = action.payload.deal
            state.deals = action.payload.deals
        },
        [deleteDealById.fulfilled] : (state, action) => {
            state.deal = action.payload
        },
    }
})

export const {addDeal, changeDeal} = dealsSlice.actions

export default dealsSlice.reducer