'use client'
import Card from '@/app/_components/Card'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import { apiPath } from '@/constants/apiPaths'

export default function LoginCard() {
  const router = useRouter()
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  // Use the custom useFetch hook to fetch data
  const method = 'POST'
  const { fetchData, loading } = useFetch(apiPath.LOGIN, userInfo, method)

  const handleUserInfo = e => {
    // Handle changes to user info form fields using event data
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleLogin = async e => {
    e.preventDefault()

    try {
      // Trigger the API call and wait for it to complete
      const fetchedData = await fetchData()

      // Handle the fetched data immediately
      if (fetchedData && fetchedData.success) {
        toast.success('Welcome Back.😊!')
        router.push('/users')
        console.log('Login successful:', fetchedData)
      } else {
        toast.error('Username or password is wrong 😓!')
        console.error('Username or password is wrong')
      }
    } catch (error) {
      toast.error("It's not you, it's us. We are working on it. ⛔!")
      console.error('Error making the API request:', error)
    }
  }

  return (
    <Card>
      <h4 className='text-2xl text-center'>Lets get started!</h4>
      <form onSubmit={handleLogin}>
        <div className='mt-4 flex flex-col gap-4'>
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
