'use client'

import React, { useState } from 'react'

export interface ContactFormProps {
    title?: string
    apiUrl?: string
}

const ContactForm = ({ title = '', apiUrl = '/api/contactform' }: ContactFormProps) => {
    const [error, setError] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const postData = async () => {
        try {
            setEmailSent(false)
            setLoading(true)

            const response = await fetch('/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    message,
                }),
            })

            const result = await response.json()
            console.log(result)

            setEmailSent(true)
            setEmail('')
            setMessage('')
        } catch (error) {
            console.error(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
            <form
                className=""
                onSubmit={(e) => {
                    e.preventDefault()
                    postData()
                }}
            >
                <div className={'mt-5'}>
                    <label htmlFor="email-input">
                        <span className="sr-only">Email address</span>
                        <input
                            autoComplete="email"
                            className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                            id="email-input"
                            name="email"
                            placeholder={'Ваш email'}
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className={'mt-5'}>
                    <label htmlFor="message-input">
                        <span className="sr-only">Сообщение</span>
                        <textarea
                            autoComplete="message"
                            className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                            id="message-input"
                            name="message"
                            placeholder={'Ваше сообщение'}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>
                <div className={'mt-5'}>
                    <button
                        className={
                            'mb-2 me-2 w-full rounded-lg bg-blue-500 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-300 dark:bg-pink-500 dark:hover:bg-pink-300'
                        }
                        type="submit"
                    >
                        {!!loading && 'Отправляется...'}
                        {!loading && 'Отправить'}
                    </button>
                </div>
                <div className={'mt-5 text-center text-green-700'}>
                    {!!emailSent && (
                        <p>
                            Ваше сообщение отправлено! <br /> Спасибо!
                        </p>
                    )}
                </div>
            </form>
        </div>
    )
}

export default ContactForm
