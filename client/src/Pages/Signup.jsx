import React from 'react'
import { Header} from '../Components'
import "../styles/Form.css"

const Signup = () => {
  return (
    <div className='body'>
      <Header/>
      <form className='form'>
    <div className="logo-img-container">
     <img src={require('../assets/dost-logo.png')} alt='logo' className='logo-img' />
    </div>
   <div className='field-container'>
   <div className='form-field'>
   <label htmlFor="name" method="post">Username</label>
   <br/>
   <input type="text" name="name" placeholder="Enter Username" required />
   </div>
   <div className='form-field'>
   <label htmlFor="email" method="post">Email</label>
   <br/>
   <input type="text" name="email" placeholder="Enter Email-id" required />
   </div>
   <div className='form-field'>
   <label htmlFor="password" method="post">Password</label>
   <br/>
   <input type="text" name="password" placeholder="Enter Password" required />
   <br/>
   <br/>
   <button type="submit">Signup</button>
   </div>
   </div>
  </form>
    </div>
  )
}

export default Signup