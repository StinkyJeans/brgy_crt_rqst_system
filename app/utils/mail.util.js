import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "norepbarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCgszW_tWTH6pcyIPzDk5gTJ1F4ErB1tRSgzq2C79XtTEXL6kV9cMu8ESe5DCes7SzYL6Z-nIDFFp5o5_ciDXIPH9XitM_VJJ18KobT_ru1Llyd914GLMQWrxH_1Fp_Pk7Ky2XUesgEmL15JbRvVAIaE7PIzgXNSdaCgYKAaASARMSFQHGX2MiDRyHwGFhU1FLLBBf607QCg0171",
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