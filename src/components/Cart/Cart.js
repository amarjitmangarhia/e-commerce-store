import React from 'react'
import Header from "../Header/Header"
import CartItems from '../Modal/CartItems/CartItems'
import { storeSliceActions } from '../../store/react-store'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  const removeHandler = (id) => {
    dispatch(storeSliceActions.removeItem(id));
  };

  return (
    <div>
      <Header />
      <div className='min-h-screen'>
        <h1 className='text-5xl flex justify-center mt-20'>Cart</h1>
        <div className='flex flex-col gap-3 justify-center items-center p-1 mt-10'>
      {cartItems.map((item) => {
        return <div className='border border-5 p-2 sm:w-96  flex justify-between items-center'>
            <div className='w-50'>
              <img className='w-50' src={item.image} alt='image' />
            </div>
            <div className='w-50'>
             <div>
             <p>{item.name}</p>
              </div>
              <button
                className="bg-dark text-white p-1 my-2"
                onClick={() => removeHandler(item.id)}
              >Remove</button>
            </div> 
        </div>
      })}


        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Cart