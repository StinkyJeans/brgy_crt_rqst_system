import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "norepbarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCguU91rqkGI6JZU_Or4MyM-eC83X3sHBijFi0ssvI6cSbdhvLDogaIwP2XeumDzAIgBhFnRd8a1i6KWvDxv9oZMLQT5WfBq1huk24QbC6_CxSJ8TOnSmHb2mM3FCi-pnd9Jne2m9ejeo3vWOMzspOdb97ysQpF3yaCgYKAWISARMSFQHGX2MiFfgPnvwoB_xOw7sJEZdnDg0171",
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