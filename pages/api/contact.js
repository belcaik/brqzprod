require('dotenv').config();
const PASSWORD = process.env.password;
const nodemailer = require("nodemailer");

export default function handler(req, res) {
  var transporter = nodemailer.createTransport({
    host: "smtp.pedrogarrido.tech",
    port: 587,
    debug: true,
    logger: true,
    tls: {
      secureProtocol: "TLSv1_method",
      secure: false,
      ignoreTLS: true,
      rejectUnauthorized: false,
    },
    auth: {
      user: "contacto@pedrogarrido.tech",
      pass: PASSWORD,
    },
  });
  var mailData = {
    from: "contacto@pedrogarrido.tech",
    to: "s1dh4.test@inbox.testmail.app",
    subject: `${req.body.nombre} Te envio un mensaje!`,
    html: `
      <h2>Mensaje:</h2>
      <p>${req.body.mensaje}</p>
      <h3>datos de contacto</h3>
      <ul>
        <li>Nombre: ${req.body.nombre}</li>
        <li>Email: ${req.body.email}</li>
        <li></li>
      </ul>
      <footer>
        este correo se envia automaticamente porfavor no responder
      <footer>
    `,
    // html: <div>{req.body.message}</div>
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      res.status(500);
      console.log(err);
    } else {
      res.status(200)
    }
  });
}
