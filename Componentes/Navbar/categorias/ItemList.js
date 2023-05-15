import React,{useEffect,useState} from "react"
import { Link, useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import './categorias.css'


const ItemList=({texto})=>{
    const [products,setProducts]=useState([]);
    const {itemId}=useParams()


    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Productos')
        
        if (itemId){
            const queryFiltro=query(itemsCollection,where("category","==",itemId))
            getDocs(queryFiltro).then((res)=>
            setProducts(
                res.docs.map((products)=>({id:products.id,...products.data()}))
            ))
           
        }
        
        else {
        
            const queryFiltre=query(itemsCollection,where("titular","==",itemId))
            getDocs(queryFiltre).then((res)=>
            setProducts(
                res.docs.map((products)=>({id:products.id,...products.data()}))
               
            ))
        }
       
    },[itemId])

    


    return (
        <div>{products.map((products)=>(
            
        
        <Link className="links"key={products.id} to={`/Detalle/${products.id}`}
>
       <h1 className="Categorias">{products.title}</h1>
       <img src={products.image}/>
      
       
       
       


        </Link>
        ))}</div>
    
    )
}
export default ItemList