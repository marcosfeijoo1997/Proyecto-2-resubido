import './App.css';
import Navbar from './Componentes/Navbar';
import NavbarPrinc from './Componentes/NavbarPrinc';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*todas las rutas*/
import Inicio from './Componentes/ItemsNav/Inicio';
import Nosotros from './Componentes/ItemsNav/Nosotros';
import Servicios from './Componentes/ItemsNav/Servicios';
import CarritoContainer from './Componentes/Carrito/CarritoContainer';
import Footer from './Componentes/Footer/Footer';
import ItemList from './Componentes/Navbar/categorias/ItemList'
import Category from './Componentes/Navbar/categorias/categorias';
import ItemDetail from './Componentes/Navbar/categorias/itemDetail';


/*fin*/


function App() {
  return (<div className="App">
    <BrowserRouter>
 <Navbar/>
 <NavbarPrinc/>


  <Routes>
<Route path='/' element={<Inicio/>}/>
<Route path='/Nosotros' element={<Nosotros/>}/>

<Route path='/Categorias' element={<Category/>}/>
<Route
						path="/Categorias/:itemId"
						element={<ItemList/>}
            
            
					/>
<Route path='/Detalle/:detailId'
element={<ItemDetail/>}/>


<Route path='/Servicios' element={<Servicios/>}/>
<Route path='/Carrito' element={<CarritoContainer/>}/>
    </Routes>
    <Footer/>
</BrowserRouter>


    </div>
    /*En productos tengo que meter una ruta dinámica*/
  );
}

export default App;
