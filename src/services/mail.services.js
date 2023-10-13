
const mailTransport = require('@sendgrid/mail');

module.exports.sendMail =   function (email, name) {
    mailTransport.setApiKey(process.env.SENDGRID_KEY);
    const mailContent = {
        from: 'inbox.explicitcars@gmail.com',
        to: email,
    }
    mailContent.dynamic_template_data = {
        'name': name,
    }
    mailContent.template_id = process.env.TEMPLATE_KEY
    mailTransport.send(mailContent).then((response) => {
        console.log('Email sent Successfully', response);
    }).catch((error) => {
        console.error(error);
    })
}
