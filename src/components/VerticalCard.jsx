import "./VerticalCard.css"

const VerticalCard = (props) =>{

    return (
        <>
            <div class="verticalcard">
                <img src={props.icon} alt="icono"/>
                <span>{props.text}</span>
            </div>
        </>
    )

}
export default VerticalCard