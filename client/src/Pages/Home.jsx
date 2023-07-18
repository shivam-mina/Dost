import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Header } from '../Components'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
  const navigate = useNavigate()
  const [cookies, removeCookie] = useCookies([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/login')
      }
      const { data } = await axios.post(
        'http://localhost:5000',
        {},
        { withCredentials: true }
      )
      const { status, user } = data
      setUsername(user)
      return (
        status
          ? toast(`Hello ${user}`, {
              position: 'top-right',
            })
          : removeCookie('token'),
        navigate('/login')
      )
    }
    verifyCookie()
  }, [cookies, navigate, removeCookie])

  const Logout = () => {
    removeCookie('token')
    navigate('/signup')
  }
  return (
    <div>
      <Header />
      <div style={{ fontSize: '80px', textAlign: 'center' }}>
        Welcome <span>{username}</span> , Let's Talk
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
