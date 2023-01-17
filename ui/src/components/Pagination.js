import React from 'react'

export const Pagination = ({dataLength, mealsPerPage, setCurrentPage, selectedMealsLength}) => {
    let pages = []
    if(dataLength){
      for(let i = 1; i<= Math.ceil(dataLength/mealsPerPage); i++){
        pages.push(i)
    }
    }
    if(selectedMealsLength){
      for(let i = 1; i<= Math.ceil(selectedMealsLength/mealsPerPage); i++){
        pages.push(i)
    }
    }
  return (
    <div>
    <nav aria-label="Page navigation example">
        <ul className="pagination">
        {pages.map((page,index)=>
            <li className="page-item" key={index}><a onClick={()=>setCurrentPage(page)} className="page-link" href="!#">{page}</a></li>
        )}
        </ul>
    </nav>
    </div>
  )
}
