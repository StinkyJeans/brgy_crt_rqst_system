import sendNotificationEmail from "@/app/utils/certificatenotif.mail";

export const POST = async (request) => {
    const { firstName, email, purpose, documentTitle } = await request.json();
    try {
        const result = await sendNotificationEmail({ firstName, email, purpose, documentTitle });
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