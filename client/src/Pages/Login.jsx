import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  const { email, password } = input

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleError = (error) => {
    toast.error(error, {
      position: 'bottom-right',
    })
  }
  const handleMessage = (message) => {
    toast.success(message, {
      position: 'bottom-right',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:5000/login',
        { ...input },
        { withCredentials: true }
      )

      const { message, success } = data
      if (success) {
        handleMessage(success)
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        handleError(message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="logo-img-container">
          <img
            src={require('../assets/dost-logo.png')}
            alt="logo"
            className="logo-img"
          />
        </div>
        <div className="field-container">
          <div className="form-field">
            <label htmlFor="email" method="post">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email-id"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password" method="post">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleOnChange}
              required
            />
            <br />
            <br />
            <button type="submit">Login</button>
            <br />
            <br />
            <span>
              Not Registered? Sign Up Now{' '}
              <Link style={{ color: 'white' }} to={'/signup'}>
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login
