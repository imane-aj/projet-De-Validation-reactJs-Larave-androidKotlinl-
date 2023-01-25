import { createSlice, createStore } from '@reduxjs/toolkit';

const initState = {
    currentPage:1,
    mealsPerPage:8,
    indexOfLastMeal:8,
    indexOfTheFirstMeal:0
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: initState,
    reducers: {
        setCurrentPage: (state, action)=>{
            state.currentPage = action.payload
            state.indexOfLastMeal = state.currentPage  * state.mealsPerPage
            state.indexOfTheFirstMeal = state.indexOfLastMeal - state.mealsPerPage
        },
        Meals: (state, action) =>{
            state.meals = action.payload
            console.log(state.meals)
        }
    }
})
// const reducer = (state = initState, action)=>{
//     state.indexOfLastMeal = state.currentPage  * state.mealsPerPage
//     state.indexOfTheFirstMeal = state.indexOfLastMeal - state.mealsPerPage
//     if(action.type == 'setCurrentPage'){
//         state = {...state, currentPage : action.payload}
//         state.indexOfLastMeal = state.currentPage  * state.mealsPerPage
//         state.indexOfTheFirstMeal = state.indexOfLastMeal - state.mealsPerPage
//         // console.log(state.currentPage )
//         return state
//     }
//     return state
// }

const store = createStore(paginationSlice.reducer)
export const paginationActions = paginationSlice.actions
export default store