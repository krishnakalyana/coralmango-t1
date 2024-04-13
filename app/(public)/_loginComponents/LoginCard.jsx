'use client'
import Card from '@/app/_components/Card'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { handleloginapi } from './_apicalls/handleLogin'
export default function LoginCard() {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const handleUserInfo = e => {
    /**
     * Handles changes to user info form fields using event data.
     * Updates userInfo state while preserving other field values.
     */
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  const handleLogin = async e => {
    /**
     * Manages the login process when the user submits the form.
     * Prevents default form submission, sets loading state, and calls the login API.
     * Handles success or failure with appropriate toast messages and logs.
     * Ends by resetting the loading state.
     */
    e.preventDefault()
    setLoading(true)

    try {
      const data = await handleloginapi(userInfo)
      if (data.success) {
        toast.success('Welcome Back.😊!')
        router.push('/users')
        console.log('Login successful:', data)
      } else {
        toast.error('Username or password is wrong 😓!')
        console.error('Username or password is wrong')
      }
    } catch (error) {
      toast.error('Its not you its us we are working on it. ⛔!')
      console.error('Error making the API request:', error)
    }

    setLoading(false)
  }
  return (
    <Card>
      <h4 className='text-2xl text-center'>Lets get started ! </h4>
      <form onSubmit={handleLogin}>
        <div className='mt-4 flex flex-col gap-4 '>
          <input
            type='email'
            name='email'
            placeholder='john@demo.com'
            onChange={handleUserInfo}
          />
          <input
            type='password'
            name='password'
            placeholder='john@123'
            onChange={handleUserInfo}
          />
          <button type='submit' disabled={loading}>
            {loading ? 'loading...' : 'Login'}
          </button>
        </div>
      </form>
    </Card>
  )
}
