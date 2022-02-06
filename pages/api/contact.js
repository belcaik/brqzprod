require('dotenv').config();
const PASSWORD = process.env.password;

export default function handler(req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user:'velcaik',
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData={
    from: 'velcaik@gmail.com',
    to: 'belcaik@gmail.com',
    subject: `Mensaje de ${req.body.nombre}`,
    text: req.body.mensaje,
    html: <div>{req.body.message}</div>
  }
  transporter.sendMail(mailData, (err, info)=>{
    if(err){
      console.log(err)
    }else{
      console.log(info)
    }
  })
  res.status(200)
}
