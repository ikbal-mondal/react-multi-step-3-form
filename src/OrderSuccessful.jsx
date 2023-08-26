import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccessful = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-2xl text-center">
       <div className="flex justify-center">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3B7R36-IL6Etch06JWyXVFYpSFBQYSs_8aZwuLycq4Q5zCIwAPrRXVdG5PzP1qbqXot0&usqp=CAU" alt="" />
       </div>
        <h1 className="text-3xl font-semibold text-green-600 mb-4"> Your  Order Successful!</h1>
        <p className="text-[#0066CF] ">Thank you for your order. Your order has been successfully processed.</p>
        <Link to='/'>
        <button className='btn bg-gradient-to-r from-[#0066CF] to-[#3CBDFF] hover:from-[#3CBDFF]  hover:to-[#0066CF] font-bold text-white my-8'>Agin New Order</button>
        </Link>
      </div>
    </div>
        </div>
    );
};

export default OrderSuccessful;