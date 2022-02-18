import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const [userData, setUserData] = useState([])

  //get data from local storage
  useEffect(() => {
    let lsData = localStorage.getItem('users')
    if (lsData) {
      const data = JSON.parse(localStorage.getItem('users'))
      setUserData(data)
    } else {
      return []
    }
  }, [])

  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    console.log(data)
    setUserData([...userData, data])
  }

  // set user in local storage
  useEffect(() => {
    window.localStorage.setItem('users', JSON.stringify(userData))
  }, [userData])

  return (
    <div className='container'>
      <h1>Register</h1>
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

export default SignUp
