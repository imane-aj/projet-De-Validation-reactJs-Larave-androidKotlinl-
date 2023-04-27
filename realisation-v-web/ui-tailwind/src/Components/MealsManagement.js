import React, { Fragment, useState} from 'react'
import { Search } from './Search';
import Viewer from './Viewer';



export const MealsManagement= ()=> {
    const [show, setShow] = useState(false)

    return (
        <Fragment>
            <div className='flex flex-row justify-between'>
                <div className='basis-4/6'>
                    <Search />
                </div>
                <button onClick={()=>setShow(true)} className={`basis-2/12 h-12 mt-4 mx-2 rounded border border-orange-300 px-4 ${show ? 'text-white bg-orange-300': 'hover:text-white hover:bg-orange-300 '}`}>Favorites</button>
                <button onClick={()=>setShow(false)} className={`basis-2/12 h-12 mt-4 rounded border border-orange-300 px-4  ${!show ? 'text-white bg-orange-300': 'hover:text-white hover:bg-orange-300 '}`}>Meals List</button>
            </div>
            <Viewer show={show}/>
        </Fragment>
        
    )
}
