import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "norepbarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCguODXaTFQzXb-f0gVB87Ch4fxR8jAYuJOu-t0IR2pm-b37qTnaQFvpACU3ftyC8WEssG8GJZvwZ_rEAxE6gr-CHclNfxwrjACJZDIjg-WDAcMTfxt07oB_s976HZ7iSiI_2nxF4td51DDwC2C_vmFJ8ck20ZYI9aCgYKAV0SARMSFQHGX2Mizls9diigQcUTL_81cZviFA0171",
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