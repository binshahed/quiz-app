import { useEffect, useState } from 'react'

const usePreviousAnswer = () => {
  const [previousAnswer, setPreviousAnswer] = useState([])

  //get data from local storage
  useEffect(() => {
    let lsData = localStorage.getItem('previous-answer')
    if (lsData) {
      const data = JSON.parse(localStorage.getItem('previous-answer'))

      setPreviousAnswer(data)
    } else {
      return []
    }
  }, [])

  return [previousAnswer, setPreviousAnswer]
}

export default usePreviousAnswer
