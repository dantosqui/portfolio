import "./recomendaciones.css"
import Quote from "../quote/Quote"

const Recomendaciones = () => {
return(
<>
    <div id="recomendaciones">
    <h3 class="center header" style={{marginTop:'20px'}} >Recomendaciones</h3>
    <div class="quotes"> 
        <Quote text="Para quien corresponda:
Es un placer recomendar a Dante, quien demostró ser un empleado excepcional durante su tiempo trabajando conmigo. Dante se destacó por su dedicación, ética laboral y habilidades sobresalientes para resolver problemas de manera eficiente. Es una persona confiable, responsable y comprometida con su trabajo.
Sin duda alguna, Dante será un activo valioso para cualquier organización. Lo recomiendo sin reservas.
Atentamente,
Zareke"></Quote>
        <Quote text="A quien corresponda:
Es un placer recomendar a [dante]. He tenido la oportunidad de interactuar con [él/ella] y puedo dar fe de su gran capacidad, dedicación y ética de trabajo excepcional.
[dante] tiene un profundo conocimiento en [informatica] y siempre se desempeña con profesionalismo y eficiencia. Sin duda, sería un gran activo para cualquier organización.
Atentamente,
ChatGPT"></Quote>
    </div>
    </div>
</>
)    
}

export default Recomendaciones