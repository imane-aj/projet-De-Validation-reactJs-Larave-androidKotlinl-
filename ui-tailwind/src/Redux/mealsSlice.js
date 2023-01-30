import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMeals = createAsyncThunk('meals/getMeals', async()=>{
    console.log("sdvf")
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
    return res.data.meals;
})

export const handleSearch = createAsyncThunk('meals/handleSearch', async(e)=>{
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+e.target.value);
    return res.data.meals
})

const mealsSlice = createSlice({
    name : 'meals',
    initialState : {meals : [], isLoading: false},
    extraReducers:{
        [getMeals.pending] : (state,action)=>{
            state.isLoading = true
        },
        [getMeals.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.meals = action.payload
        },
        [handleSearch.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.meals = action.payload
            console.log(state.meals)
        },
    }
})

// export const {handleSearch} = mealsSlice.reducer;
export default mealsSlice.reducer;