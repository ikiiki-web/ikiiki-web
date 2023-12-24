/* eslint-disable import/no-anonymous-default-export  */
import type { NextApiRequest, NextApiResponse } from 'next'
const sgMail = require('@sendgrid/mail')

export default async function (req: NextApiRequest, res: NextApiResponse) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

  const { email, userMessage, adminMessage, userSubject, adminSubject } = req.body

  const messages = [
    {
      to: `${email}`,
      from: '株式会社IK!IK!（イキイキ） <eiki@kodoishin.com>',
      subject: userSubject,
      text: userMessage,
      html: `<p>${userMessage}</p>`,
    },
    {
      to: 'eiki@kodoishin.com',
      from: '株式会社IK!IK!（イキイキ） <eiki@kodoishin.com>',
      reply_to: `${email}`,
      subject: adminSubject,
      text: adminMessage,
      html: `<p>${adminMessage}</p>`,
    },
  ]

  try {
    await sgMail.send(messages)
    res.status(200).send('Message sent successfully.')
  } catch (error: any) {
    console.log('ERROR', error?.response?.body)
    res.status(400).send('Message not sent.')
  }
}
