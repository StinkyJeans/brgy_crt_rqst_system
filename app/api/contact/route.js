import { sendEmail } from "@/app/utils/mail.util";

export const POST = async (request) => {
    const {                  
        firstName,
        lastName,
        email,
        phoneNumber,
        message} = await request.json();
    const sender ={
        name:'My App',
        address: 'no-reply@example.com'
    }
    const receipients = [{
        name:'John',
        address: 'johncona3@gmail.com',
    }]
    try{
        const result = await sendEmail({ firstName, lastName, email, phoneNumber, message});
        return Response.json({
            accepted: result.accepted
        })
    } catch (error) {
        console.log(error);
        return Response.json({message: 'Unable to send email this time'},{
            status: 500
        })
    }
}