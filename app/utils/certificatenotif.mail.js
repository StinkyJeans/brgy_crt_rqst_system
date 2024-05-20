import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: "norepbarangayrizal@gmail.com",
        accessToken: "ya29.a0AXooCgvcOjo59lhVqU4fHYCoFoavjhFsfprMeNs_JRZjMe9Tw8_rPwQsnVAG3EppTnbYPnblPUM9zXqn5XvcJrWNLaCMWAdV9YGL4iVoDlJzNd9h-msB3dtlGPcfF9B3-4eAR-FQhmfkO1J60mrzQWMqtAoWPqYVXGphOAaCgYKAYESARMSFQHGX2MiclAPq21-pA_ZBbfucGwZLA0173", // Update with your access token
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
