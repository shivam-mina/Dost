import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Form.css'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

const Signup = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
  })
  const { username, email, password } = input
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  // toast messages functions
  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    })
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: 'bottom-right',
    })

  /* Submitting our details 
   Real Magic happens here*/

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        'http://localhost:5000/signup',
        { ...input },
        { withCredentials: true }
      )
      const { message, success } = data
      if (success) {
        handleSuccess(message)
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } else {
        handleError(message)
      }
    } catch (error) {
      console.log(error)
    }

    setInput({ ...input, username: '', email: '', password: '' })
  }
  return (
    <div className="body">
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
            <label htmlFor="username" method="post">
              Username
            </label>
            <br />
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleOnChange}
              required
            />
          </div>
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
            <button type="submit">Signup</button>
            <br />
            <br />
            <span>
              Already have an account?{' '}
              <Link style={{ color: 'white' }} to={'/login'}>
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup
