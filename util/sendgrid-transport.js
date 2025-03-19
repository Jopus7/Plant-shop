const sendgridTransport = require('nodemailer-sendgrid-transport')
const nodemailer = require('nodemailer')



const transporter = nodemailer.createTransport(sendgridTransport({
  auth: {
    api_key:'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'
  }
}))

exports.transporter = transporter