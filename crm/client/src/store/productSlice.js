import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProductDeals = createAsyncThunk(
    'deals/fetchProductDeals',
    async function (id) {
        let productsDeal

        await axios.post('http://localhost:5000/api/productDeal/getProductsByDealId', {id: id})
            .then((res) => {
                console.log(res);
                productsDeal = res.data;
            })
        return productsDeal
    }
)

export const fetchProducts = createAsyncThunk(
    'deals/fetchProducts',
    async function (_, {}) {
        let products

        await axios.get('http://localhost:5000/api/product/getAll')
            .then((res) => {
                console.log(res);
                products = res.data;
            })
        return products
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsDeal: [],
        products: []
    },
    reducers: {

    },
    extraReducers: {
        [fetchProductDeals.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.productsDeal = action.payload
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.products = action.payload
        },
    }
})

export const {} = productSlice.actions

export default productSlice.reducer