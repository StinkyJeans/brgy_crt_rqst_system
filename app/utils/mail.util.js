import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "norepbarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCgu8-VKZ1xGAfwJpl7X0R19Y5FEkLIEzZ7QySqWdSUHM34J2IlbYIjKSQovRkryW8xNvQE4qseoi7Ds9jZD6R_RymhjuYtuWgBf9b3ETTmfh8ULDEDtCyEfJyMstAm1N1Clm_Aj-pRisyzwUcl4qHNGYxPFTUmezaCgYKAf0SARMSFQHGX2MiShfTjf0-RDzJvNN8UNBB_A0171",
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