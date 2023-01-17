import React, { Fragment } from 'react'

export const ShowMeals = ({currentMeals}) => {
  return (
    <Fragment>
        {currentMeals.map((item, idx)=>
            <div className='col-md-6' style={{marginBottom : '3em'}} key={idx}>
                <div className="card" >
                    <img src={item.strMealThumb} className="card-img-top" alt="..." style={{height : '12em'}}/>
                    <div className="card-strMealThumb">
                        <h5 className="card-title">{item.strMeal}</h5>
                        Youtube :<a href={item.strYoutube}> {item.strYoutube}</a>
                    </div>
                    <button class="btn btn-outline-success">+</button>
                </div>
            </div>
        )}
    </Fragment>
  )
}
