import React, {useState, useEffect} from 'react';

const Modal = ({modal, setModal, thisItem}) => {
    return (
        <div>
            {modal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
                                <h3 className="text-3xl font=semibold">Ingredients</h3>
                                <button className="text-red-500 rounded border border-orange-300 px-4 hover:text-white hover:bg-orange-300"
                                    type="button" onClick={() => setModal(false)}>
                                    Close
                                </button>
                            </div>
                            <div className='grid grid-cols-2 grap-6 justify-between'>
                                <p className='p-3'>{thisItem?.strIngredient1}</p> 
                                <p className='p-3'>{thisItem?.strIngredient2}</p> 
                                <p className='p-3'>{thisItem?.strIngredient3}</p>
                                <p className='p-3'>{thisItem?.strIngredient4}</p> 
                                <p className='p-3'>{thisItem?.strIngredient5}</p> 
                                <p className='p-3'>{thisItem?.strIngredient6}</p>
                                <p className='p-3'>{thisItem?.strIngredient7}</p> 
                                <p className='p-3'>{thisItem?.strIngredient8}</p> 
                                <p className='p-3'>{thisItem?.strIngredient9}</p>
                                <p className='p-3'>{thisItem?.strIngredient10}</p> 
                                <p className='p-3'>{thisItem?.strIngredient11}</p> 
                                <p className='p-3'>{thisItem?.strIngredient12}</p> 
                                <p className='p-3'>{thisItem?.strIngredient13}</p> 
                                <p className='p-3'>{thisItem?.strIngredient14}</p> 
                                <p className='p-3'>{thisItem?.strIngredient15}</p> 
                                <p className='p-3'>{thisItem?.strIngredient16}</p>
                                <p className='p-3'>{thisItem?.strIngredient17}</p> 
                                <p className='p-3'>{thisItem?.strIngredient18}</p> 
                                <p className='p-3'>{thisItem?.strIngredient19}</p>
                                <p className='p-3'>{thisItem?.strIngredient20}</p>
                            </div>
                        </div>
                    </div>
                </div>
              ) : null
            }
        </div>
    );
};

export default Modal;