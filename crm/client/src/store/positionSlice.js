import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPositionDeals = createAsyncThunk(
    'deals/fetchPositionDeals',
    async function (id) {
        let positionsDeal

        await axios.post('http://localhost:5000/api/service/getServicesByDealId', {id: id})
            .then((res) => {
                console.log(res);
                positionsDeal = res.data;
            })
        return positionsDeal
    }
)

export const fetchPositions = createAsyncThunk(
    'deals/fetchPositions',
    async function (_, {}) {
        let positions

        await axios.get('http://localhost:5000/api/position/getAll')
            .then((res) => {
                positions = res.data;
            })
        return positions
    }
)

const positionSlice = createSlice({
    name: 'positions',
    initialState: {
        positionsDeal: [],
        positions: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchPositionDeals.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.positionsDeal = action.payload
        },
        [fetchPositions.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.positions = action.payload
        },
    }
})

export const {} = positionSlice.actions

export default positionSlice.reducer