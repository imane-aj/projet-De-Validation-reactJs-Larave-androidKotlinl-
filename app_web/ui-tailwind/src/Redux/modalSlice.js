import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: "modal",
    initialState: {modalShow: false},
    reducers: {
        handleModal : (state,action)=>{
            state.modalShow = action.payload
        }
    }
})

export const {handleModal} = modalSlice.actions;
export default modalSlice.reducer;