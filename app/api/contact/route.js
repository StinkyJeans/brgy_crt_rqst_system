import { sendEmail } from "@/app/utils/mail.util";

export async function POST() {
    const sender ={
        name:'My App',
        address: 'no-reply@example.com'
    }
    const receipients = [{
        name:'John',
        address: 'johncona3@gmail.com',
    }]
    try{
        const result = await sendEmail();
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