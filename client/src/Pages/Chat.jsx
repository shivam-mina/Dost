import { Header } from '../Components'
import React from 'react'
import axios from 'axios'
// require('dotenv').config()

const Chat = () => {
  const start = async () => {
    await axios
      .post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: 'Hello!' },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
          },
        }
      )
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Header />
      <button onClick={start}>Chat</button>
    </div>
  )
}

export default Chat
