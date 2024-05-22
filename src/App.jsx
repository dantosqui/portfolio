
import './App.css';
import SobreMi from './components/sobremi/Sobremi.jsx'
import Conocimientos from './components/conocimientos/Conocimientos.jsx'
import Hola from './components/Hola/Hola.jsx'
import Experiencia from './components/experiencia/Experiencia.jsx'
import Recomendaciones from './components/recomendaciones/Recomendaciones.jsx'
import Educacion from './components/educacion/educacion.jsx';
import Contacto from './components/contacto/contacto.jsx'

function App() {
  return (
    <>

    <header>
      
    </header>

    <div class="center">
    <Hola></Hola>

    {/*a partir de aca todos son igualitos en importancia y tamaño*/}
    <SobreMi></SobreMi>
    <Conocimientos></Conocimientos> {/*si quiero sacar los br tengo q cambiar verticalcard*/}
    <br />
    <br />
    <Experiencia></Experiencia>
    <Recomendaciones></Recomendaciones>
    <Educacion></Educacion>
    <Contacto></Contacto>

    <footer>
      
    </footer>
    </div>
    {/*creditos a vecteezy.com por una imagen*/}
    </>
  );
}

export default App;
