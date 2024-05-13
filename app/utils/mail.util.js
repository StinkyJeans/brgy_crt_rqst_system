import nodemailer from 'nodemailer';


// const transport = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: process.env.MAIL_PORT,
//     secure: process.env.NODE_ENV !== 'development',
//     auth: {
//         user:process.env.MAIL_USER,
//         pass:process.env.MAIL_PASSWORD
//     }
// })
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "norepbarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCgu9rYg6d2KhWdWjEn62-BIYdrLNTrfFpX7_foklVHOab8MuX4dquNzVzVGek76azem-L4Vw6qNyn-_7d7ACpRmrqdIvWlsIXV0snzhT1MlD1hXyonwzij3MQSoS6d-jvfNJwqJVLx-S9TMHwu7MBWLdUeO4qVXyaCgYKAawSARMSFQHGX2MiXThetEWDHw9cqTZDk001fA0171",
    },
  });

  export const sendEmail = async ({ firstName, lastName, email, phoneNumber, message }) => {
    try {
        const emailContent = `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phoneNumber}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;

        const response = await transporter.sendMail({
            from: 'norepbarangayrizal@gmail.com',
            to: 'johncona3@gmail.com', // Change this to the recipient's email address
            subject: 'CONTACT',
            html: emailContent,
            text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage:\n${message}`,
        });

        console.log('Email sent:', response);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: 'Error sending email. Please try again later.' };
    }
};