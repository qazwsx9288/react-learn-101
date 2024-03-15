export const pageTitle = 'Fix a crash'

import { useState } from 'react'

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Sending: "${message}"`)
    setIsSent(true)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value)

  if (isSent) {
    return <h1>Thank you!</h1>
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    )
  }
}
