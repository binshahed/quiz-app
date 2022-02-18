import  { useEffect, useState } from 'react'

const useLoginData = () => {
  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    let signIn = localStorage.getItem('logged-in-user')
    if (signIn) {
      const data = JSON.parse(localStorage.getItem('logged-in-user'))
      setLoggedInUser(data)
    } else {
      return []
    }
  }, [])

  return [loggedInUser, setLoggedInUser]
}

export default useLoginData
