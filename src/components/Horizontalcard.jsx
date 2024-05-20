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
                <div class="titule">
                        <h4>{props.title}</h4> 
                        <span class="cardtimespan">{props.subtitle}</span> 
                </div>
                <p>{props.text}</p>
            </div>

        </div>
    </>
    )
}

export default HorizontalCard