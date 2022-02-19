import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import useQuizData from '../../hooks/useQuizData'
import ResultModal from '../AddQuiz/ResultModal'
// import useUser from '../../hooks/useUser'
import SingleQuiz from './SingleQuiz'

const Quiz = () => {
  const [questions, setQuestions] = useQuizData()
  const [allAnswers, setAllAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState({})
  const [previousAnswer, setPreviousAnswer] = useState([])

  const [show, setShow] = useState(false)
  const [fullscreen, setFullscreen] = useState(true)

  const handleSubmitAnswer = () => {
    const newAnswer = [...previousAnswer, allAnswers]
    setPreviousAnswer(...newAnswer)
    setShow(true)
    setFullscreen(true)
  }

  return (
    <div className='container'>
      <h1 className='m-5'>Make Your Answer</h1>

      {questions.map(element => (
        <Card key={element.id} className='my-5'>
          <SingleQuiz
            element={element}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            allAnswers={allAnswers}
            setAllAnswers={setAllAnswers}
          />
        </Card>
      ))}
      <button
        onClick={() => handleSubmitAnswer('sm-down')}
        className='btn btn-warning'
      >
        Submit Answer
      </button>

      <ResultModal
        fullscreen={fullscreen}
        show={show}
        setShow={setShow}
        allAnswers={allAnswers}
        
      />
    </div>
  )
}

export default Quiz
