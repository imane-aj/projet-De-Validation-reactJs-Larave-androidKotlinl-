import axios from 'axios'
import React , { useState, useEffect }from 'react'
import { Pagination } from './Pagination';
import { SelectedMeals, ShowMeals } from './ShowMeals';
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

    //calculation for pagination 
    const indexOfLastMeal = currentPage * mealsPerPage
    const indexOfTheFirstMeal = indexOfLastMeal - mealsPerPage
    const currentMeals = data.slice(indexOfTheFirstMeal , indexOfLastMeal)

    //selectMeals
    const [selectedMeals, setSelectedMeals] = useState([])
    const selectMeals=(item)=>{
        if(!selectedMeals.includes(item)){
            setSelectedMeals(selectedMeals => [item,...selectedMeals])
        }
        let newArr = data.filter(key => key !== item)
        setData(newArr)
    }

  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <div className='row'>
            <Searchh/>
            <ShowMeals currentMeals={currentMeals} selectMeals={selectMeals} />
            <Pagination dataLength={data.length} mealsPerPage={mealsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
        </div>
        <div className='col-md-6'>
            <div className='row'>
                <h4 className='fav'>Favorite</h4>
                <SelectedMeals selectedMeals={selectedMeals} />
                <Pagination selectedMealsLength={selectedMeals.length} mealsPerPage={mealsPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Meals