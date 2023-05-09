import { configureStore} from '@reduxjs/toolkit';
import paginationReducer from './paginationSlice'
import mealsReducer from './mealsSlice'
import modalReducer from './modalSlice'
import favoriteSlice from './favoriteSlice';

const store = configureStore({reducer:
    {
        pagination : paginationReducer,
        meals : mealsReducer,
        modal : modalReducer,
        favorite : favoriteSlice,
    }
})
export default store