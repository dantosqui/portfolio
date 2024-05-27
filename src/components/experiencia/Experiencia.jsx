import "./experiencia.css"
import HorizontalCard from "../horizontalcard/Horizontalcard.jsx"
import hol from '../../images/hangoverlogo.png'
//importante: estoy aware de que experiencia.jsx esta en minuscula asi como Horizontalcard.jsx PERO el visual studio me tira un error por alguna razon si esta escrito en mayuscula
const Experiencia = () => {
    return(
        <>
        <div id="experiencia">
        <h3 class="center header"> Experiencia</h3>
        <HorizontalCard  title="UI designer" subtitle="Valve. (2026-2030)" text="Pase cuatro años como diseñador de UI en esta empresa y gane mucha experiencia de trabajo para el UI y el diseño de interfaces de usuario. Estos años los pase trabajando en la empresa y en esta empresa los años que los pase trabajando los pase ganando experiencia de trabajo para posteriores trabajos en el area." icon="https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-web-design-icon-png-image_2038483.jpg"></HorizontalCard>
        <HorizontalCard  title="Fundador y Developer" subtitle="Hangover. (2025-actualidad)" text="Con mis compañeros de la iniciativa Hangover iniciamos la iniciativa conocida como hangover que consiste en una iniciativa de empresa especifica para lograr los objetivos que nos ponemos como equipo para poder traer un producto satisfactorio que pueda conllevar las responsabilidades de nusetra empresa" icon={hol}></HorizontalCard>
        </div>
        </>
    )
}

export default Experiencia