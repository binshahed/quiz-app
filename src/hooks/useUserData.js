import { useEffect, useState } from 'react'

const useUserData = () => {
  
    const [usersData, setUsersData] = useState([])

  // Load user Data from local storage
  useEffect(() => {
    let lsData = localStorage.getItem('users')
    if (lsData) {
      const data = JSON.parse(localStorage.getItem('users'))
      setUsersData(data)
    } else {
      return []
    }
  }, [])

  return [usersData, setUsersData]
}

export default useUserData
