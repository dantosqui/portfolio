
import './App.css';
import SobreMi from './components/sobremi/Sobremi.jsx'
import Conocimientos from './components/conocimientos/Conocimientos.jsx'
import Hola from './components/Hola/Hola.jsx'
import Experiencia from './components/experiencia/Experiencia.jsx'
import Recomendaciones from './components/recomendaciones/Recomendaciones.jsx'
import Educacion from './components/educacion/educacion.jsx';
import Contacto from './components/contacto/contacto.jsx'
import BarraNav from './components/barraNav/BarraNav.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div id="wrappertodo">

    
    <BarraNav></BarraNav>
    

    <div id ="todowrapper" class="center">
    <Hola></Hola>
    <SobreMi></SobreMi>
    <Conocimientos></Conocimientos> 
    <Experiencia></Experiencia>
    <Recomendaciones></Recomendaciones>
    <Educacion></Educacion>
    <Contacto></Contacto>
    </div>

    <footer>
      <Footer></Footer>
    </footer>
    {/*creditos a vecteezy.com por una imagen*/}
    </div>
  );
}

export default App;
