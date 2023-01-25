import React, { Fragment, useEffect , useState} from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import Modal from './Modal';
import { useDispatch, useSelector } from 'react-redux';


export const MealsManagement= ()=> {
    const state = useSelector((state=>state))
    
    // get meals
    const [meals, setMeals] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [thisItem, setThisItem] = useState([])
    
    useEffect(()=>{
        const meals = async()=>{
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
            setMeals(res.data.meals)
        }
        meals()
    }, [])
    
    // //calculation for pagination
    const currentMeals = meals?.slice(state.indexOfTheFirstMeal, state.indexOfLastMeal)
    
  return (
    <div className='grid gap-8 grid-cols-2 lg:grid-cols-4'>
        {currentMeals.map((item, idx)=>
                <div className='bg-white rounded px-3 py-2' key={idx}>
                    <img src={item.strMealThumb} alt='' className='h-44 w-full pb-3'/>
                    <div className='flex justify-between'>
                        <h6>{item.strMeal}</h6>
                        <button className='rounded border border-orange-300 px-4' onClick={()=>{setShowModal(true); setThisItem(item)}}>Ingredients</button>
                    </div>
                    <a href='#' className="text-orange-500 text-xs hover:text-base transition-all"><i className="fa-solid fa-video text-orange-500 text-xs"></i> Youtube</a>
                    {/* <Modal showModal={showModal} setShowModal={setShowModal} thisItem={thisItem}/> */}
                </div>
        )}
        <Pagination meals={meals}/>
    </div>
  )
}
