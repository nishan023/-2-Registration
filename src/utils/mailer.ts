import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { loadTemplate } from './emailTemplates'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        // user: process.env.EMAIL_USER,
        // pass: process.env.PASS_USER,
    
        
        user:"nissandhakal11@gmail.com",
        pass:"tnuu jucr zmky mrda",
    },
})

export const sendEmail = async (
    to: string,
    subject: string,
    templateName: string
) => {
    try {
        const htmlContent = loadTemplate(templateName);
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html: htmlContent,
        })
        console.log('Email sent successfully')
    } catch (error) {
        console.error('Error sending email', error)
    }
}
