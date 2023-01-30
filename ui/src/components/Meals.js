import axios from 'axios'
import React , { useState, useEffect }from 'react'
import { Pagination } from './Pagination';
import { SelectedMeals, ShowMeals } from './ShowMeals';
import { Searchh } from './Searchh';

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
    const currentMeals = data?.slice(indexOfTheFirstMeal , indexOfLastMeal)

    //selectMeals
    const selectMeals=(item)=>{
        if(dataSelected.length == 0 || !dataSelected.find((e) => e.strMeal == item.strMeal)){
            axios.post('http://localhost:8000/api/favorite', item)
            .then((res => {
                setDataSelected([...dataSelected,res.data])
                getData()
            }))
        }else{
            message()
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
    // search
    const search = (e)=>{
        let value = e.target.value
        if(value != '' ){
            if(data.indexOf(value)){
                axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+value).then((res=>{
                    setData(res.data.meals)
                }))
            }if(!data.indexOf(value)){
                console.log('There is no Meals in that name')
            }
        }else{
            fetchData()
        }
    }
    

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
            <Searchh search={search} message={message}/>
            <ShowMeals currentMeals={currentMeals} selectMeals={selectMeals} message={message}/>
            <Pagination dataLength={data?.length} mealsPerPage={mealsPerPage} setCurrentPage={setCurrentPage}/>
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