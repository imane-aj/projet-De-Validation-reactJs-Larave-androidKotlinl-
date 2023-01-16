import React from 'react'

export const Pagination = ({dataLength, mealsPerPage, setCurrentPage}) => {
    let pages = []
    for(let i = 1; i<= Math.ceil(dataLength/mealsPerPage); i++){
        pages.push(i)
    }
    // console.log(Math.ceil(currentMeals/mealsPerPage))
  return (
    <div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
        {/* <li class="page-item"><a class="page-link" href="#">Previous</a></li> */}
        {pages.map((page,index)=>
            <li class="page-item" key={index}><a onClick={()=>setCurrentPage(page)} class="page-link" href="!#">{page}</a></li>
        )}
        {/* <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
        </ul>
    </nav>
    </div>
  )
}
