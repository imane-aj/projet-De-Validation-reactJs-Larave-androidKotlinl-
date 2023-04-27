import React, {Fragment, useEffect , useState} from 'react'
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';
import {animationStyles} from '../Utils/Const'
import { getMeals } from './../Redux/mealsSlice';
import { addFavorite, getFavorite, deleteFavorite } from './../Redux/favoriteSlice'; 
// import { handleModal } from '../Redux/modalSlice';
import Pagination from './Pagination';

const Viewer = (show) => {
    const dispatch = useDispatch()
    const globalState = useSelector((state=>state))
    const [thisItem, setThisItem] = useState([])
    const [modal, setModal] = useState(false)

    //get meals data
    useEffect(()=>{dispatch(getMeals()); dispatch(getFavorite())}, [dispatch])
  
    //pagination
    const currentMeals = globalState.meals.meals?.slice(globalState.pagination.indexOfTheFirstMeal, globalState.pagination.indexOfLastMeal)
    const favorite = globalState.favorite.favorite?.slice(globalState.pagination.indexOfTheFirstMeal, globalState.pagination.indexOfLastMeal)

    const selectData = (item)=>{
        console.log(item)
        const favorite = globalState.favorite.favorite
        if(favorite.length == 0 || !favorite.find((e) => e.strMeal == item.strMeal)){
            dispatch(addFavorite(item))
            dispatch(getFavorite(item))
        }
    }

  return (
    <Fragment>
        {show.show ? (
            <Fragment>
            <div className='grid gap-8 grid-cols-2 lg:grid-cols-4'>
                {favorite.length>0 ? (favorite?.map((item, idx)=>
                    <div className={` relative rounded px-3 py-2 border border-orange-300 ${animationStyles}`} key={idx}>
                        <button onClick={()=>dispatch(deleteFavorite(item.id))} className='absolute right-3 bottom-0 text-red-600'><i className="fa-solid fa-star text-lg"></i></button>
                        <img src={item?.strMealThumb} alt='' className='h-44 w-full pb-3'/>
                        <div className='flex justify-between'>
                            <h6>{item?.strMeal}</h6>
                            <button className='rounded borde border-orange-300 px-4 hover:text-white hover:bg-orange-300' onClick={()=>{setModal(true); setThisItem(item)}}>Ingredients</button>
                        </div>
                        <a href='#' className="text-orange-500 text-xs hover:text-base transition-all"><i className="fa-solid fa-video text-orange-500 text-xs"></i> Youtube</a>
                        <Modal modal={modal} setModal={setModal} thisItem={thisItem}/>
                    </div>
                )):
                 <p className='text-center text-red-700 text-lg mt-10'>You didn't add any favorite meals yet</p>}
            </div>
            <Pagination favorite={globalState.favorite.favorite} state={globalState.pagination}/>
            </Fragment>
            ):
            <Fragment>
                <div className='grid gap-8 grid-cols-2 lg:grid-cols-4'>
                    {currentMeals.map((item, idx)=>
                        <div className={` relative rounded px-3 py-2 border border-orange-300 ${animationStyles}`} key={idx}>
                            <button className='absolute right-3 bottom-0' onClick={()=>{selectData(item)}}><i className={`${favorite?.find((e) => e?.strMeal == item?.strMeal )? 'fa-solid' : 'fa-regular'} fa-star text-lg`}></i></button>
                            <img src={item.strMealThumb} alt='' className='h-44 w-full pb-3'/>
                            <div className='flex justify-between'>
                                <h6>{item.strMeal}</h6>
                                <button className='rounded border border-orange-300 px-4 hover:text-white hover:bg-orange-300' onClick={()=>{setModal(true); setThisItem(item)}}>Ingredients</button>
                            </div>
                            <a href='#' className="text-orange-500 text-xs hover:text-base transition-all"><i className="fa-solid fa-video text-orange-500 text-xs"></i> Youtube</a>
                            <Modal modal={modal} setModal={setModal} thisItem={thisItem} />
                        </div>
                    )}
                </div>
                <Pagination meals={globalState.meals.meals} state={globalState.pagination}/>
            </Fragment>
            }
    </Fragment>
  )
}

export default Viewer