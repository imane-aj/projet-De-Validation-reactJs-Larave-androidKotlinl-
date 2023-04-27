import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../Redux/paginationSlice';

const Pagination = ({meals, state, favorite}) => {
    const dispatch = useDispatch()
    let pages = []
    if(meals?.length){
      for(let i = 1; i<= Math.ceil(meals.length/state.mealsPerPage); i++){
        pages.push(i)
      }
    }
    if(favorite?.length){
        for(let i = 1; i<= Math.ceil(favorite.length/state.mealsPerPage); i++){
          pages.push(i)
        }
      }
      
    return (
        <nav aria-label="Page navigation example" className='mt-5'>
            <ul className="inline-flex items-center -space-x-px">
                {pages.map((page, idx)=>
                    <li key={idx}>
                        <a onClick={()=>dispatch(setCurrentPage(page))} href="!#" className="px-3 py-1 leading-tigh bg-white border
                         border-orange-300 text-orange-600">{page}</a>
                    </li>
                )}
                
            </ul>
        </nav>
    );
};

export default Pagination;