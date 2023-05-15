import React, { useState } from "react";
import './Sliders.css'


function Sliders() {
  const ManodeObra=13700

  const [largo, setLargo] = useState(50);
  const [ancho, setAncho] = useState(50);
  const [alto, setAlto] = useState(75);

  function handleLargoChange(event) {
    setLargo(event.target.value);
  }

  function handleAnchoChange(event) {
    setAncho(event.target.value);
  }

  function handleAltoChange(event) {
    setAlto(event.target.value);
  }

  
  return (
    <div><hr/>
        <p>Inserte el <b>Alto</b> de la mesa <b>{alto} cm</b> </p>
      <input className='Sliders'  type="range" min="12" max="120" step="1"value={alto} onChange={handleAltoChange} />
      <p>(standard para usar sentado 75 cm y 100  para usar parado)</p>
      <hr/>
      <p>Inserte el <b>Ancho</b> de la mesa <b>{ancho} cm</b></p>
      <input className='Sliders'  type="range" min="12" max="200" step="1" value={ancho} onChange={handleAnchoChange} />
      <hr/>
      <p>Inserte el <b>largo</b> de la mesa <b>{largo} cm</b></p>
   
      <input className='Sliders'  type="range" min="12" max="280" step="1" value={largo} onChange={handleLargoChange} />


      <h1>Precios</h1>
      <p>Precio de caño 60x60 para la altura {alto} cm <h3>${alto*4*19.16}</h3></p>
      <p>Precio de caño 60x60 para el ancho {ancho} cm <h3>${ancho*4*19.16}</h3></p>
      <p>Precio de caño 60x60 para el largo {largo} cm <h3>${largo*2*13}</h3></p>
      <p>Precio Mano de obra <h3>$15000</h3></p>


      <h2>Total</h2>
      <h3>${alto*4*19.16}+ ${ancho*4*19.16}+ ${largo*2*13}+{largo*2*13}+${ManodeObra}</h3><br/>
      <hr/>
      <h3>${alto*4*19.16+ancho*4*19.16+largo*2*13+largo*2*13+ManodeObra}</h3>
      
    
     
      
    
   
    </div>
  
  );
}

export default Sliders;
