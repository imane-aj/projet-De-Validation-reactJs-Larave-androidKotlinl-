import axios from 'axios'
import React , { useState, useEffect }from 'react'
import { Pagination } from './Pagination';
import { SelectedMeals, ShowMeals } from './ShowMeals';
// import { Searchh } from './Searchh';

function Meals() {
    const [message, setMessage] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [mealsPerPage, setMealsPerPage] = useState(8)
    const [dataSelected, setDataSelected] = useState([])
    const fetchData = async() =>{
        setLoading(true)
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s')
        setData(res.data.meals)
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    }, [])

    //calculation for pagination 
    const indexOfLastMeal = currentPage * mealsPerPage
    const indexOfTheFirstMeal = indexOfLastMeal - mealsPerPage
    const currentMeals = data.slice(indexOfTheFirstMeal , indexOfLastMeal)

    //selectMeals
    const selectMeals=(item)=>{
        console.log(item.strMeal)
        if(dataSelected.length == 0 || dataSelected.find((e) => e.strMeal != item.strMeal)){
            axios.post('http://localhost:8000/api/favorite', item)
            .then((res => {
                setDataSelected([...dataSelected,res.data])
                getData()
            }))
        }else{
            setMessage('The item exist already ..!!')
        }
    }

    //get selected Data
    const getData = ()=>{
        axios.get('http://localhost:8000/api/favorite').then((res=>{
            setDataSelected(res.data)
       }))
    }
    useEffect(() => {
        getData()
    }, []);
    
    // deletSelectedData
    const deletSelectedMeals = (item)=>{
        axios.delete(`http://localhost:8000/api/favorite/${item}`).then((res)=>{
            getData()
        })
    }

  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-9'>
        <div className='row'>
            {/* <Searchh/> */}
            <div className='searchContainer'>
                <input type='search' placeholder='Search ... !!' className='form-control mb-4 mt-4 search' onChange={(e)=>fetchData()}/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"/>
                </svg>
            </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <ShowMeals currentMeals={currentMeals} selectMeals={selectMeals} message={message}/>
            <Pagination dataLength={data.length} mealsPerPage={mealsPerPage} setCurrentPage={setCurrentPage}/>
        </div>
        </div>
        <div className='col-md-3'>
            <div className='row'>
                <h4 className='fav'>Favorite</h4>
                <SelectedMeals dataSelected={dataSelected} deletSelectedMeals={deletSelectedMeals}/>
                <Pagination dataSelectedLength={dataSelected.length} mealsPerPage={mealsPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Meals