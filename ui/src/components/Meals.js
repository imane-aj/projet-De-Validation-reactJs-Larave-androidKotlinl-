import axios from 'axios'
import React , { useState, useEffect }from 'react'
import { Pagination } from './Pagination';
import { ShowMeals } from './ShowMeals';
import { Searchh } from './Searchh';

function Meals() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [mealsPerPage, setMealsPerPage] = useState(4)
    useEffect(()=>{
        const fetchData = async() =>{
            setLoading(true)
            const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
            setData(res.data.meals)
            setLoading(false)
        }
        fetchData()
    }, [])

    //calculate
    const indexOfLastMeal = currentPage * mealsPerPage
    const indexOfTheFirstMeal = indexOfLastMeal - mealsPerPage
    const currentMeals = data.slice(indexOfTheFirstMeal , indexOfLastMeal)
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <div className='row'>
            <Searchh />
            <ShowMeals currentMeals={currentMeals} />
            <Pagination dataLength={data.length} mealsPerPage={mealsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
        </div>
        <div className='col-md-6'></div>
        </div>
    </div>
  )
}

export default Meals