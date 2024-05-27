import "./contacto.css";

const Contacto = () => {
  return (
    <>
      <div id="contacto">
        <h3 class="center header" id="titulo">
          Contacto
        </h3>
        <br />
        <h4>Sigamos en contacto!</h4>
        <p>
          Contactame mediante{" "}
          <a href="mailto:danosqui20@gmail.com">
            <b class="mailto">danosqui20@gmail.com</b>
          </a>{" "}
          o llenando el formulario. ¡Gracias por visitar!
        </p>
<br />
        <div id="formulario">
          <form action="https://formspree.io/f/mbjneoov" method="POST">
            <div class="inpu">
              <label for="mail">Tu correo:</label>
              <input id="mail" type="email" name="email"></input>
            </div>
            <div class="inpu">
              <label for="mensaje">Tu mensaje:</label>
              <input type="text" id="mensaje" name="message"></input>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
