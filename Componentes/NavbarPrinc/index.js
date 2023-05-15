import './NavbarPrinc.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import DibujoNav from '../Carrito/DibujoNav'




const NavbarPrinc=()=>{
    return (
        <div>    <div className='Enrutado'><ul className='ulenrutado'>
       
           <img src={logo}></img>
           <li>	<NavLink className="hover-underline-animation" to="/">
						Inicio
					</NavLink></li>

            <li>	<NavLink className="hover-underline-animation" to="/Nosotros">
                        Nosotros
					</NavLink></li>


            <li>	<NavLink className="hover-underline-animation" to="/Servicios">
                             Servicios
					</NavLink></li>
                   


            <li>	<NavLink className="hover-underline-animation" to="/Categorias">
                          Productos
					</NavLink></li>

                    <li><NavLink className="NoUnderline" to="/Carrito"><DibujoNav/>
                          
					</NavLink></li>



                </ul>
                
                </div>
           </div>

    
    )
}
export default NavbarPrinc