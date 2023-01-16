import axios from 'axios'
import React , { useState, useEffect }from 'react'

function Meals() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((res)=>{
            setData(res.data.meals)
        })
    })
  return (
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
        <div className='row'>
            {data.map((item, idx)=>
                <div className='col-md-6' style={{marginBottom : '3em'}} key={idx}>
                    <div className="card" >
                        <img src={item.strMealThumb} className="card-img-top" alt="..." style={{height : '12em'}}/>
                        <div className="card-strMealThumb">
                            <h5 className="card-title">{item.strMeal}</h5>
                            Youtube :<a href={item.strYoutube}> {item.strYoutube}</a>
                        </div>
                    </div>
                </div>
        )}
        </div>
        </div>
        <div className='col-md-6'></div>
        </div>
    </div>
  )
}

export default Meals