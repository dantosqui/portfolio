import "./HorizontalCard.css"

//props que hace take: icon, subtitle, title, text
const HorizontalCard = (props) => {
    return(
    <>
        
        <div class="horizontalCard">

            <div class="icon">
                <img src={props.icon} alt="Icono"/>
            </div>

            <div class="content">
                <h3>{props.title}</h3>
                <span class="cardtimespan">{props.subtitle}</span>
                <p>{props.text}</p>
            </div>

        </div>
    </>
    )
}

export default HorizontalCard