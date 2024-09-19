//Email helper
import emailHelper from "../middlewares/emailHelper.middleware.js";

//Send email
const sendEmail = async (req, res) => {
    const {from, subject, text} = req.body;

    try{

        const response = await emailHelper(from, subject, text)
        res.status(200).json(response)

    }catch(error){
       
        res.status(500).send({message : 'Error sending email'})
        throw error
        
    }

}

export default sendEmail