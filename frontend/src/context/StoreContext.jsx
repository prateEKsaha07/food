import { createContext, useEffect, useState } from "react"
import { food_list } from "../assets/assets"


export const StoreContext = createContext(null)
const StoreContextProvider=(props) => {

    const[Cartitems,setCartitems] = useState({})

    const AddToCart = (itemId)=>{
        if(!Cartitems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    } 

    const removeFromCart = (itemId) => {
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(Cartitems);
    },[Cartitems])

    const contextValue = {
        food_list,
        Cartitems,
        setCartitems,
        AddToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider