import React,{useEffect,useState} from "react"
import { Link, useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import './categorias.css'


const ItemList=({texto})=>{
    const [products,setProducts]=useState([]);
    const {detailId}=useParams()


    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Productos')
        
        if (detailId){
            const queryFiltro=query(itemsCollection,where("id","==",detailId))
            getDocs(queryFiltro).then((res)=>
            setProducts(
                res.docs.map((products)=>({id:products.id,...products.data(),
             })),
        
            ))
           
        }
        
        else {
        
            getDocs(itemsCollection).then((res)=>
            setProducts(
                res.docs.map((products)=>({id:products.id,...products.data()}))
               
            ))
        }
       
    },[detailId])

    


    return (
        <div>{products.map((products)=>(
            
        
        <Link className="links"key={products.id} to={`/Categorias/${products.id}`}
>
       <h1 className="Categorias">{products.title}</h1>
       <img src={products.image}/>
      
       
       
       


        </Link>
        ))}</div>
    
    )
}
export default ItemList