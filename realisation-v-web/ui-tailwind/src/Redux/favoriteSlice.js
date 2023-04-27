import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getFavorite = createAsyncThunk('favorite/getFavorite', async()=>{
    const res = await axios.get('http://localhost:8000/api/favorite')
    return res.data
})
export const addFavorite = createAsyncThunk('favorite/addFavorite', async(item, thunkAPI)=>{
    const res = await axios.post('http://localhost:8000/api/favorite',item)
    thunkAPI.dispatch(getFavorite());
})
export const deleteFavorite = createAsyncThunk('favorite/deleteFavorite', async(id)=>{
    const res = await axios.delete(`http://localhost:8000/api/favorite/${id}`)
    return id 
})

const favoriteSlice = createSlice({
    name : "favorite",
    initialState :{favorite : [], isLoading :false},
    extraReducers: {
        [getFavorite.pending] : (state,action)=>{
            state.isLoading = true
        },
        [getFavorite.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.favorite = action.payload
        },
        [addFavorite.fulfilled] : (state,action)=>{
            state.favorite.push(action.payload)
        },
        [deleteFavorite.fulfilled] : (state,action)=>{
            state.favorite = state.favorite.filter((el) => el.id !== action.payload)
        }
    }
})

export default favoriteSlice.reducer
