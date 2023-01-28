import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFavorite = createAsyncThunk('favorite/getFavorite', async()=>{
    const res = await axios.get('http://localhost:8000/api/favorite')
    return res.data
})
export const addFavorite = createAsyncThunk('favorite/addFavorite', async(item)=>{
    const res = await axios.post('http://localhost:8000/api/favorite',item)
})
const favoriteSlice = createSlice({
    name : "favorite",
    initialState :{favorite : [], color: false, isLoading :false},
    extraReducers: {
        [getFavorite.pending] : (state,action)=>{
            state.isLoading = true
        },
        [getFavorite.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.favorite = action.payload
        },
        [addFavorite.fulfilled] : (state,action)=>{
            state.color = true
            state.favorite.push(action.payload)
        }
    }
})

export default favoriteSlice.reducer
