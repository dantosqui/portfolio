
import './App.css';
import SobreMi from './components/Sobremi.jsx'
import Conocimientos from './components/Conocimientos.jsx'
import Hola from './components/Hola.jsx'


function App() {
  return (
    <>
    <div class="center">
    <Hola></Hola>

    {/*a partir de aca todos son igualitos en importancia y tamaño*/}
    <SobreMi></SobreMi>
    <Conocimientos></Conocimientos>

    {/* <Sobremi></Sobremi>
    <Conocimientos></Conocimientos>
    <Experiencia></Experiencia>
    <Recomendaciones></Recomendaciones>
    <Educacion></Educacion>
    <Ceretificados></Ceretificados>
    <Contacto></Contacto> */}
    </div>
    {/*creditos a vecteezy.com por una imagen*/}
    </>
  );
}

export default App;
