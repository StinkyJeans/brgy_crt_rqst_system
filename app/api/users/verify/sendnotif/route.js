import VerifyNotificationEmail from "@/app/utils/verifynotif.mail";

export const POST = async (request) => {
    const { email} = await request.json();
    try {
        const result = await VerifyNotificationEmail({ email });
        return Response.json({
            accepted: result.accepted
        })
    } catch (error) {
        console.log(error);
        return Response.json({message: 'Unable to send email this time'},{
            status: 500
        })
    }
    
};