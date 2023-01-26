import React, { Fragment, useEffect , useState} from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import Modal from './Modal';
import {animationStyles} from '../Utils/Const'
import { useDispatch, useSelector } from 'react-redux';
import { Meals } from '../Redux/Store'
import Search from './Search';


export const MealsManagement= ()=> {
    const state = useSelector((state=>state))
    const dispatch = useDispatch()
    // get meals
    const [meals, setMeals] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [thisItem, setThisItem] = useState([])

    const Meals = async()=>{
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
        setMeals(res.data.meals)
    }
    useEffect((e)=>{
        Meals()
    }, [])
    
    // //calculation for pagination
    const currentMeals = meals?.slice(state.indexOfTheFirstMeal, state.indexOfLastMeal)
    const search=(e)=>{
        let search = e.target.value
        if(meals.filter((el) => el.strMeal == search)){
           return console.log(true)
         }
    }
    
  return (
    <Fragment>
        {/* <Search /> */}
        <form className='mb-6 mt-20'>   
            <label htmlFor="defaultDearch" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" onChange={search} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>

        <div className='grid gap-8 grid-cols-2 lg:grid-cols-4'>
            {currentMeals.map((item, idx)=>
                    <div className={`bg-white rounded px-3 py-2 ${animationStyles}`} key={idx}>
                        <img src={item.strMealThumb} alt='' className='h-44 w-full pb-3'/>
                        <div className='flex justify-between'>
                            <h6>{item.strMeal}</h6>
                            <button className='rounded border border-orange-300 px-4' onClick={()=>{setShowModal(true); setThisItem(item)}}>Ingredients</button>
                        </div>
                        <a href='#' className="text-orange-500 text-xs hover:text-base transition-all"><i className="fa-solid fa-video text-orange-500 text-xs"></i> Youtube</a>
                        {/* <Modal showModal={showModal} setShowModal={setShowModal} thisItem={thisItem}/> */}
                    </div>
            )}
        </div>
        <Pagination meals={meals}/>
    </Fragment>
  )
}
