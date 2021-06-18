const { SMTP_URL } = process.env;
const nodemailer = required('nodemailer');

const defaultEmailData = { from: 'mail@ylvalandofflindberg.com' };

export const sendEmail = (emailData, smtpUrl = SMTP_URL) => {
	const completeEmailData = Object.assign(defaultEmailData, emailData);
	const transporter = nodemailer.createTransporter(SMTP_URL);
	return transporter
		.sendMail(completeEmailData)
		.then((info) => console.log(`Message sent: ${info.response}`))
		.catch((err) => console.log(`Problem sending email: ${err}`));
};
