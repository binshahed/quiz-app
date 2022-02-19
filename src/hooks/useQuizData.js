import { useEffect, useState } from 'react'

const useQuizData = () => {
    const [questions, setQuestions] = useState([])


  // Load Data from local storage
  useEffect(() => {
    let lsData = localStorage.getItem('allQuestions')
    if (lsData) {
      const data = JSON.parse(localStorage.getItem('allQuestions'))
      setQuestions(data)
    } else {
      return []
    }
  }, [])

  return [questions, setQuestions]
}

export default useQuizData
