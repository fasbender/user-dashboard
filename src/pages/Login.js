import React, { useState } from 'react'
import LineDivider from '../components/LineDivider'
import Google from '../components/Google'
import Apple from '../components/Apple'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { MdLock } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
// auth
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/authSlice'
const Login = () => {

  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const error = useSelector((state) => state.user.error)
  const token = useSelector((state) => state.user.token)

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(registerUser({ email, password }))
        if(token){
      navigate('/')
    }
  }

  return (
    <div className='max-w-4xl m-auto text-center p-2'>
      <Title title_1="Sign In" title_2="Welcome back, you’ve been missed!"/> 
      <br /><br /><br />
      <div className='flex lg:flex-nowrap flex-wrap justify-between items-center lg:w-3/5 md:w-4/5 w-full m-auto'>
        <div className='m-auto lg:mb-0 md:mb-0 mb-2'>
          <Google title="Sign In with Google" img="google"/>
        </div>
        <div className='m-auto'>
          <Apple title="Sign In with Apple ID" img="apple"/>
        </div>
      </div>
      <br /><br />
      <LineDivider/>
      <br /><br />
        <form onSubmit={handleRegister} className='lg:w-3/5 md:w-4/5 w-full m-auto'>
          {error && <p className="mt-2 mb-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Incorrect email or password</span></p>}
          <div className="mb-6 relative">
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`border focus:shadow-md ${error ? "focus:ring-red-500 focus:border-red-500 ring-red-500 border-red-500" : "border-[#F3F3F3] focus:ring-[#c9c8c8] focus:border-[#c9c8c8]"} text-sm rounded-lg block w-full p-2.5`}/>
            <div className={`${email ? 'hidden' : ''} flex items-center text-[#B0B7C3] text-sm absolute top-2/4 bottom-2/4 left-3 pointer-events-none`}>
              <span className='mr-1'>@</span>
              <span>Your Email</span>
            </div>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Some error message.</p> */}
          </div>
          <div className="mb-6 relative">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  className={`border border-[#F3F3F3] focus:shadow-md ${error ? "focus:ring-red-500 focus:border-red-500 ring-red-500 border-red-500" : "border-[#F3F3F3] focus:ring-[#c9c8c8] focus:border-[#c9c8c8]"} text-sm rounded-lg block w-full p-2.5`}/>
          <div className={`${password ? 'hidden' : ''} flex items-center text-[#B0B7C3] text-sm absolute top-2/4 bottom-2/4 left-3 pointer-events-none`}>
            <MdLock className='mr-1' />
            <span>Password</span>
          </div>
            {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Some error message.</p> */}
          </div>
          <div>
            <button className='bg-[#377DFF] hover:bg-[#2a74fc] w-full m-auto pt-2 pb-2 pl-4 pr-4 rounded-lg text-white'>Sign In</button>
          </div>
        </form>
        <br />
        <span>Don’t have an account yet? <Link to="/register" className='text-sky-600 hover:text-sky-700'>Sign Up</Link></span>
    </div>
  )
}

export default Login