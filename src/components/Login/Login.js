import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useLoginData from '../../hooks/useLoginData'

const Login = () => {
  const [usersData, setUsersData] = useState([])
  const [loggedInUser, setLoggedInUser] = useLoginData()
  useEffect(() => {
    let lsData = localStorage.getItem('users')
    if (lsData) {
      const data = JSON.parse(localStorage.getItem('users'))
      setUsersData(data)
    } else {
      return []
    }
  }, [])

  const {
    register,
    handleSubmit,

    
  } = useForm()
  const onSubmit = data => {
    usersData.map(user => {
      if (user.email === data.email && user.password === data.password) {
        window.location.reload(false)
        return setLoggedInUser(data)
      } else {
        return []
      }
    })
  }
  // set user in local storage
  useEffect(() => {
    window.localStorage.setItem('logged-in-user', JSON.stringify(loggedInUser))
  }, [loggedInUser])

  return (
    <div className='container'>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className='form-control m-4'
          placeholder='email'
          type='email'
          {...register('email', { required: true })}
        />

        <input
          className='form-control m-4'
          placeholder='password'
          type='password'
          {...register('password', { required: true })}
        />

        <input type='submit' />
      </form>
    </div>
  )
}

export default Login
