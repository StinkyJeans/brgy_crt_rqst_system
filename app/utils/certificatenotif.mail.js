import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: "norepbarangayrizal@gmail.com",
        accessToken: "ya29.a0AXooCgudliiFv2AyeHztJu5SsA9BTaZ-Ycr56J1PoFi8h4qPuo8YMnD8G5RYUGpilvlXenByWZvzcrjHpuyBVTXLXAxTwBXI8gCT1HTFeKnkOCOnQ3IVLg8Yvj8HRtGcAt2NqmRNZ0qVZ4YxgzBNsF3CSDAZJi-LbeJV3waCgYKAVUSARMSFQHGX2Mih2H6zk5o7b7rEBGhdyMsFg0173",
    },
});

const sendNotificationEmail = async ({ firstName, email, purpose , documentTitle }) => {
    try {
        console.log(email);
        const emailContent = `
            <p>Dear ${firstName},</p>
            <p>Your requested "${documentTitle}" for "${purpose}" is now ready for pickup.</p>
            <p>Please proceed to the designated location to collect your certificate.</p>
            <p>Thank you for transacting using our Barangay Certification Request System.</p>
        `;

        const response = await transporter.sendMail({
            from: 'norepbarangayrizal@gmail.com',
            to: email,
            subject: 'Certificate Pickup Notification',
            html: emailContent,
        });

        console.log('Notification email sent:', response);
        return { success: true };
    } catch (error) {
        console.error('Error sending notification email:', error);
        return { error: 'Error sending notification email. Please try again later.' };
    }
};

export default sendNotificationEmail;
