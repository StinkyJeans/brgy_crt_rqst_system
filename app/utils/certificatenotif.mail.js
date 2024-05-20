import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: "norepbarangayrizal@gmail.com",
        accessToken: "ya29.a0AXooCgvHLBVaFBAzszbEvWhQ_2XmbBzTItMgcq_J-TYh8le3anX6TWKBM1OR_TDyF5x7y3W8Y8njNZ8q9WzHS6_9ffNDAurO79QxAqegAlS2DxC6wtHJqXS4QxAmP9yMIkPDXz0f-B9Wv3kh0wmmSH7tYUYl6qk_6KunYAaCgYKAVMSARMSFQHGX2Mi7VYJK3cL5_1rSZvPsvX_XA0173", // Update with your access token
    },
});

const sendNotificationEmail = async ({ firstName, email, purpose , documentTitle }) => {
    try {
        console.log(email);
        const emailContent = `
            <p>Dear ${firstName},</p>
            <p>Your requested "${documentTitle}" for "${purpose}" is now ready for pickup.</p>
            <p>Please proceed to the designated location to collect your certificate.</p>
            <p>Thank you.</p>
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
