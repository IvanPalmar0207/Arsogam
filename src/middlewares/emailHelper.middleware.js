//nodemailer
import nodemailer from 'nodemailer'

const emailHelper = async (from, subject, text) => {
    //Trasnporter
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user: 'palmar.ivan0205@gmail.com',
            pass : 'ewoi bjaf susy nzxi'
        }
    })

    //Set up emailOptions
    let mailOptions = {
        from : from,
        to : 'palmar.ivan0205@gmail.com',
        subject : subject,
        text : text
    }

    //send the email
    try{
        const info = await transporter.sendMail(mailOptions)
        console.log('Email sent ' + info.response)
        return info
    }catch(err){
        console.log('Couldn"t send the email')
        throw err;
    }
}

export default emailHelper