import React,{useEffect,useState} from "react"
import { Link, useParams } from "react-router-dom"
import {getFirestore,collection,getDocs, DocumentSnapshot,where,query} from 'firebase/firestore'
import './categorias.css'


const Category=({texto})=>{
    const [products,setProducts]=useState([]);
    const {categoriaId}=useParams()


    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Productos')
        
        if (categoriaId){
            const queryFiltro=query(itemsCollection,where("category","==",categoriaId))
            getDocs(queryFiltro).then((res)=>
            setProducts(
                res.docs.map((products)=>({id:products.id,...products.data()}))
            ))
           
        }
        
        else {
            const queryFiltre=query(itemsCollection,where("titular","==","category"))
            getDocs(queryFiltre).then((res)=>
            setProducts(
                res.docs.map((products)=>({id:products.id,...products.data()}))
               
            ))
        }
       
    },[categoriaId])

    


    return (
        <div>{products.map((products)=>(
            
        
        <Link className="links"key={products.id} to={`/Categorias/${products.titularText}`}>
       <h1 className="Categorias">{products.titularText}</h1>
       <img src={products.titularImg}/>
       
       
       

        </Link>
        ))}</div>
    
    )
}
export default Category