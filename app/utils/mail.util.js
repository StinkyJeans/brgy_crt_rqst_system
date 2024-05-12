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
      user: "noreplybarangayrizal@gmail.com",
      accessToken: "ya29.a0AXooCgtijEDOewfCOfOWH83SQYxqgexTqS6ogpVAQdPGgoouyiNg0yAP-GElcWPS4AevYAJTuB8qT3MfyhpqLBdWg6U_vhtb_hk_LBfSGM7SfRs3Smg7omUfw9E6OOR0enh0_nWmjJIrHJ9jmEs1lRFTyrgcEG-l_scNaCgYKAV0SARASFQHGX2MiibDTULFfDgcgkrOc1oc-vg0171",
    },
  });

export const sendEmail = async () => {

        return await transporter.sendMail({
            from : 'noreplybarangayrizal@gmail.com',
            to: 'johncona3@gmail.com',
            subject : 'CONTACT',
            html: "<b>Hello world?</b>",
            text: "asdbashdkghjaksgas"
        })
}