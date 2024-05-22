import "./Quote.css"

const Quote = (props) =>{
    return(

        <>
        
            <div class ="quote">
                <div class="quoteicon">
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32371.png" alt="" />
                </div>
                <div class="text">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        
        </>

    )
}

export default Quote