// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { email, message } = req.body;

    let resultMailer: string = 'ok'

    const transporter = nodemailer.createTransport({
        host: process.env.MAILHOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAILUSER,
            pass: process.env.MAILPASSWORD,
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.MAILUSER,
            to: process.env.MAILUSER,
            subject: `SALEFASTER - Сообщение от клиента`,
            html: `<p>Сообщение от пользователя с сайта SALEFASTER</p>
                    <p><strong>Email: </strong> ${email}</p>
                    <p><strong>Message: </strong> ${message}</p><br />`
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ answer: 'fail'});
    }

    res.status(200).json({ answer: resultMailer })
}
