import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useLoginData from '../../hooks/useLoginData'
import useUserData from '../../hooks/useUserData'

const Login = () => {
  const [usersData, setUsersData] = useUserData([])
  const [loggedInUser, setLoggedInUser] = useLoginData()
  const [errorLogin, setErrorLogin] = useState('')

  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    usersData.map(user => {
      if (user.email === data.email && user.password === data.password) {
        window.location.reload(false)
        setErrorLogin('')

        return setLoggedInUser(data)
      } else {
        setErrorLogin('email or password does not exist')
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

        <p className='text-danger'>{errorLogin}</p>

        <input type='submit' />
      </form>
    </div>
  )
}

export default Login
