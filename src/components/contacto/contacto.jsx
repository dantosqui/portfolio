import "./contacto.css";

const Contacto = () => {
  return (
    <>
        <h3 class="center" id="titulo">Contacto</h3>
      <h4>Sigamos en contacto!</h4>
      <p>
        Contactame mediante <b>danosqui20@gmail.com</b> o llenando el
        formulario. ¡Gracias por visitar!
      </p>

      <div id="formulario">
        <form action="https://formspree.io/f/mbjneoov" method="POST">
            <div class="inpu">
          <label for="mail">
            Tu correo:</label>
            <input id="mail" type="email" name="email"></input>
            

          </div>
          <div class="inpu">
          <label for="mensaje">
            Tu mensaje:
            </label>
            <textarea id="mensaje" name="message"></textarea>
          
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
