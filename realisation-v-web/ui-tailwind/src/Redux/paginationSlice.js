import { createSlice } from '@reduxjs/toolkit';

const initState = {
    currentPage:1,
    mealsPerPage:8,
    indexOfLastMeal:8,
    indexOfTheFirstMeal:0
}
const paginationSlice = createSlice({
    name : 'pagination',
    initialState : initState,
    reducers : {
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload
            state.indexOfLastMeal = state.currentPage  * state.mealsPerPage
            state.indexOfTheFirstMeal = state.indexOfLastMeal - state.mealsPerPage
            console.log(state.indexOfTheFirstMeal)
        },
    }
})

export default paginationSlice.reducer
export const {setCurrentPage} = paginationSlice.actions