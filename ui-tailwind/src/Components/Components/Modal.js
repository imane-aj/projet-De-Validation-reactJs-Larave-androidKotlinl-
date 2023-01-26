import React, {useState, useEffect} from 'react';
import ReactWhatsapp from 'react-whatsapp';

const Modal = ({showModal, setShowModal, thisItem}) => {
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState([])
    const onChange = (e)=>{
        let number = e.target.value
        setNumber(number)
    }
        const Message = ()=>{
            var message = [thisItem?.strIngredient1,thisItem?.strIngredient2,thisItem?.strIngredient3,
                        thisItem?.strIngredient4,thisItem?.strIngredient5,thisItem?.strIngredient6,
                        thisItem?.strIngredient7,thisItem?.strIngredient8,thisItem?.strIngredient9,
                        thisItem?.strIngredient10,thisItem?.strIngredient11,thisItem?.strIngredient12,
                        thisItem?.strIngredient13, thisItem?.strIngredient14,thisItem?.strIngredient15,
                        thisItem?.strIngredient16,thisItem?.strIngredient17,thisItem?.strIngredient18,
                        thisItem?.strIngredient19,thisItem?.strIngredient20
                    ]     
        }
    
    return (
        <div>
       
            {showModal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                <h3 className="text-3xl font=semibold">Ingredients</h3>
                                <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                            </div>
                            <div className='grid grid-cols-2 grap-2 justify-between p-5'>
                                <p className='p-1'>{thisItem?.strIngredient1}</p> 
                                <p className='p-1'>{thisItem?.strIngredient2}</p> 
                                <p className='p-1'>{thisItem?.strIngredient3}</p>
                                <p className='p-1'>{thisItem?.strIngredient4}</p> 
                                <p className='p-1'>{thisItem?.strIngredient5}</p> 
                                <p className='p-1'>{thisItem?.strIngredient6}</p>
                                <p className='p-1'>{thisItem?.strIngredient7}</p> 
                                <p className='p-1'>{thisItem?.strIngredient8}</p> 
                                <p className='p-1'>{thisItem?.strIngredient9}</p>
                                <p className='p-1'>{thisItem?.strIngredient10}</p> 
                                <p className='p-1'>{thisItem?.strIngredient11}</p> 
                                <p className='p-1'>{thisItem?.strIngredient12}</p> 
                                <p className='p-1'>{thisItem?.strIngredient13}</p> 
                                <p className='p-1'>{thisItem?.strIngredient14}</p> 
                                <p className='p-1'>{thisItem?.strIngredient15}</p> 
                                <p className='p-1'>{thisItem?.strIngredient16}</p>
                                <p className='p-1'>{thisItem?.strIngredient17}</p> 
                                <p className='p-1'>{thisItem?.strIngredient18}</p> 
                                <p className='p-1'>{thisItem?.strIngredient19}</p>
                                <p className='p-1'>{thisItem?.strIngredient20}</p>
                            </div>
                            <input onChange={(e)=>{onChange()}} />
                            <ReactWhatsapp className='btn' number={number} message={[- thisItem?.strIngredient1 ,- thisItem?.strIngredient2]}>Send to ur Whatsapp</ReactWhatsapp>
                        </div>
                    </div>
                </div>
              ) : null
            }
        </div>
    );
};

export default Modal;