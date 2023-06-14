import React from 'react'; // importamos react
import ReactDOM from 'react-dom'; // nos permite renderizar en el DOM



const hm = <div>
  <h1>React Js</h1>
  <h2>Hola Mundo</h2>
</div>
//selecionamos el id donde se renderizara el componente
const root =  document.getElementById('root'); // hay un div con id root en index.html
ReactDOM.render(hm, root); // pinta en la pantalla la constante HolaMundo en el div con id root

