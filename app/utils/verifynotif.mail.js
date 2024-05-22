import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: "norepbarangayrizal@gmail.com",
        accessToken: "ya29.a0AXooCgs64UzOhbO-3IEQ1YMEiCq9jSELLDzm2RoGCGLE2u6e2Dn7UjOlJu2roGsWZtYEpXs4r-hT1PbAYboU0x8weeoMPzIa1Cd1UhLDqzWqR5UHy3a9PtVsRhVmt-grU7wwpDI1XzMdr-ZoIyIcw2ASWu7HcNpXoI0XaCgYKAXQSARMSFQHGX2MiiQd75_NUfhZJ_UaompsAuw0171",
    },
});

const VerifyNotificationEmail = async ({  email}) => {
    try {
        console.log(email);
        const emailContent = `
            <p>Dear User,</p>
            <p>You are verified now, you can now log in to our system.</p>
        `;

        const response = await transporter.sendMail({
            from: 'norepbarangayrizal@gmail.com',
            to: email,
            subject: 'Verification Notice',
            html: emailContent,
        });

        console.log('Notification email sent:', response);
        return { success: true };
    } catch (error) {
        console.error('Error sending notification email:', error);
        return { error: 'Error sending notification email. Please try again later.' };
    }
};

export default VerifyNotificationEmail;
