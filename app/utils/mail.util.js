import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "norepbarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCgudliiFv2AyeHztJu5SsA9BTaZ-Ycr56J1PoFi8h4qPuo8YMnD8G5RYUGpilvlXenByWZvzcrjHpuyBVTXLXAxTwBXI8gCT1HTFeKnkOCOnQ3IVLg8Yvj8HRtGcAt2NqmRNZ0qVZ4YxgzBNsF3CSDAZJi-LbeJV3waCgYKAVUSARMSFQHGX2Mih2H6zk5o7b7rEBGhdyMsFg0173",
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
            to: 'johncona3@gmail.com', 
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