

// //nodemailer setup part one

// const transporter = nodemailer.createTransport({
//     port: 587,               // true for 465, false for other ports
//     host: "smtp.ionos.com",
//     secure: false,
//     auth: {
//         user: 'orders@foodmood.club',
//         pass: '@Adel4000'
//     },
//     tls: {
//         // do not fail on invalid certs
//         rejectUnauthorized: false
//     }    
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//     if (error) {
//       console.log("transporter verify :" , error);
//     } else {
//       //console.log("this is to test of the email transporter setup is correct. Server line 24");
//     }
//   });

  
//     //******  nodemailer setup part 2 *********** //
//         //compose your message//
//         const mailOptions = {
//             from: 'orders@sveltesphere.club',
//             //to: '`${data.useremail}`'
//             to: 'fxmt2009@gmail.com',  
//             subject: 'Please confirm your email within the next 60 minutes-' + token,
            
//             html: '<p>Click <a href="http://localhost:5000/confirmemail?token=' + token + ' ">here</a> to verify your email</p>'
//             //html: '<p>Click <a href="https://www.sveltesphere.com/confirmemail?token=' + token + ' ">here</a> to verify your email</p>'
//         };


//             //********  nodemailer setup part 3 **********//
//         //use sendMail method by attaching it to the transporter
//         transporter.sendMail(mailOptions, function (err, info) {
//         if (err)
//             console.log("the email error:", err);
//         else
//             console.log("email successfully was send with the following details:", info);
//             //console.log("email successfully was send with the following details:");

//         });

//         //import EmailProvider from '@auth/core/providers/email';
//         //import nodemailer from 'nodemailer'


// //to use the email in auth function
// export const handle = SvelteKitAuth({
//     providers: [
//      EmailProvider({
//       server: {
//        host: SMTP_HOST,
//        port: Number(SMTP_PORT),
//        auth: {
//         user: SMTP_USER,
//         pass: SMTP_PASSWORD
//        }
//       },
//       from: EMAIL_FROM
//      }),
//      GoogleProvider({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET })
//     ],
//     adapter: MongoDBAdapter(clientPromise, { databaseName: NODE_ENV })
//    });