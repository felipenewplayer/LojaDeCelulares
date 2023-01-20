import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import {BsCartCheckFill, BsCartPlusFill} from 'react-icons/bs'
 import { getItem, setItem } from "../services/LocalStorageFuncs"

const ProductArea = styled.div`{
        display:flex;
        flex-wrap:wrap;
       gap:50px;
        justify-content:center;
        align-item: center;
        
        div{
            height:320px;
            width:230px;
            display:flex;
            flex-direction:column;
            justify-content: space-between;
            align-items: center;
            border: solid 1px black;
            
            padding:20px;
        margin-bottom:70px; 
        margin-top:30px;
        }
        button
        {
            font-size:30px;
            cursor:pointer;
            background:transparent;
            border:none;
            color:crimson;
        }
}`


export const Home = () => {
    const [data,setData] = useState([])
    const [cart, setCart] = useState(getItem('carrinhoYt')||[])

    useEffect (() =>{
        const fetchApi = async () =>{
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=cel'
            const reposponse = await fetch(url)
            const objJson = await reposponse.json()
            setData(objJson.results)
        }
        fetchApi()
    },[])


    const handleClick= (obj) =>{
        const element = cart.find((e)=> e.id===obj.id)
        if(element){
            const arrFilter= cart.filter((e)=>e.id !== obj.id)
            setCart(arrFilter)
            setItem('carrinhoYt     ', arrFilter)
        }else{
            setCart([...cart,obj])
            setItem('carrinhoYt', [...cart,obj  ])
        }
    }
    return (
       <ProductArea>
        {
            data.map((e) =>(
                <div key={e.id}>
                    <h4>{e.title}</h4>
                    <img src={e.thumbnail} alt="" />
                    <h4>{`R$ ${e.price}`}</h4>

                    <button
                    onClick={()=>handleClick(e)}>
                        {
                            cart.some((itemCart) =>itemCart.id === e.id) ? (
                                <BsCartCheckFill />
                            ):
                            (
                                <BsCartPlusFill />
                            )
                        }
                    </button>
                </div>
            ))
        }
        </ProductArea>
    )


}