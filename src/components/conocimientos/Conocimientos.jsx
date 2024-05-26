import "./conocimientos.css"
import VerticalCard from "../verticalcard/VerticalCard.jsx"
import img from '../../images/apicon.jpg'

const Conocimientos = () => {

    return(
        <>
        <div id="conocimientos" class="center">
            <h3>Conocimientos</h3>
            <br></br>
            <div id="cards" class ="squish">
                
                <VerticalCard icon={img} text="Desarrollo de APIs"></VerticalCard>
                <div id="cssanimado"><VerticalCard icon="https://www.svgrepo.com/show/102011/css-3.svg" text="CSS"></VerticalCard></div>
                <VerticalCard icon="https://static.thenounproject.com/png/1760714-200.png" text="Aplicaciones Web"></VerticalCard>
                <VerticalCard icon="https://static.thenounproject.com/png/4978350-200.png" text="Infraestructura de Internet"></VerticalCard>

            </div>
        
        </div>
        </>
    )


}
export default Conocimientos