import React,{createContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const CartContext=createContext()

export function CartProvider({children}){
    const[cart,setCart]=useState([])
    const navigate=useNavigate()

    const addToCart=(product)=>{
        setCart(currentCart=>[...currentCart,product])
        navigate('/cart')
    }

    return(
        <CartContext.Provider value={{cart,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

