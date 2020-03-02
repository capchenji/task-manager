const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email, 
        from: 'capchenji@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name)=>{
    sgMail.send({
        to: email, 
        from: 'capchenji@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. Let me know your comments.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to: 'capchenji@gmail.com',
//     from: 'capchenji@gmail.com',
//     subject: 'first email',
//     text: 'Hi'
// })