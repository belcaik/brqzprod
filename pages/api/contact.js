require('dotenv').config();
const PASSWORD = process.env.password;
const nodemailer = require('nodemailer');

export default function handler(req, res) {
  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user:'louisa.wolf34@ethereal.email',
      pass: PASSWORD,
    }
  });
  var mailData={
    from: 'louisa.wolf34@ethereal.email',
    to: 'belcaik@gmail.com',
    subject: `Mensaje de `,
    text: 'sdfasd',
   // html: <div>{req.body.message}</div>
  }
  transporter.sendMail(mailData, (err, info)=>{
    if(err){
      console.log(err)
      res.status(500)
    }else{
      console.log(info)
      res.status(200)
    }
  })
}
