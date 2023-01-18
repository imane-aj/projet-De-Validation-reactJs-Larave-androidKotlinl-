import axios from 'axios'
import React, { Fragment, useState, useEffect } from 'react'

export const ShowMeals = ({currentMeals, selectMeals}) => {
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
                    <button className="btn btn-outline-success" onClick={()=>{selectMeals(item)}}>+</button>
                </div>
            </div>
        )}
    </Fragment>
  )
}


export const SelectedMeals = ({dataSelected,deletSelectedMeals}) => {
   
  return (
    <Fragment>
        {dataSelected.map((item, idx)=>
            <div className='col-md-6' style={{marginBottom : '3em'}} key={idx}>
                <div className="card" >
                    <img src={item.strMealThumb} className="card-img-top" alt="..." style={{height : '12em'}}/>
                    <div className="card-strMealThumb">
                        <h5 className="card-title">{item.strMeal}</h5>
                        Youtube :<a href={item.strYoutube}> {item.strYoutube}</a>
                    </div>
                    <button className="btn btn-outline-success" onClick={()=>{deletSelectedMeals(item.id)}}>-</button>
                </div>
            </div>
        )}
    </Fragment>
  )
}

