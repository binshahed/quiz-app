import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
// import useUser from '../../hooks/useUser'
import SingleQuiz from './SingleQuiz'

const Quiz = () => {
  const [questions, setQuestions] = useState([])
  const [wrongAnswer, setWrongAnswer] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  // const { loggedInUser } = useUser()
  // console.log(loggedInUser?.email);

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

  return (
    <div className='container'>
      <h1 className='m-5'>Make Your Answer</h1>

      {questions.map(element => (
        <Card key={element.id} className='my-5'>
          <SingleQuiz
            element={element}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            wrongAnswer={wrongAnswer}
            setWrongAnswer={setWrongAnswer}
          />
        </Card>
      ))}
    </div>
  )
}

export default Quiz
