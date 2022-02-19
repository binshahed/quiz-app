import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import useLoginData from '../../hooks/useLoginData'
import usePreviousAnswer from '../../hooks/usePreviousAnswer'
import useQuizData from '../../hooks/useQuizData'
import ResultModal from './ResultModal'
import SingleQuiz from './SingleQuiz'

const Quiz = () => {
  const staticData = [
    {
      id: '1645299545677425',
      name:
        'Which built-in method returns the character at the specified index?',
      answer: 'c',
      options: {
        a: 'characterAt()',
        b: 'getCharAt()',
        c: 'charAt()',
        d: 'None of the above.'
      }
    },
    {
      id: '16452995723457422',
      name:
        'Which of the following function of Array object extracts a section of an array and returns a new array?',
      answer: 'c',
      options: {
        a: 'reverse()',
        b: 'shift()',
        c: 'slice()',
        d: 'some()'
      }
    },
    {
      id: '16452923459577421',
      name:
        'Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?',
      answer: 'd',
      options: {
        a: 'push()',
        b: 'join()',
        c: 'pop()',
        d: 'map()'
      }
    }
  ]
  // all state
  const [selectedAnswer, setSelectedAnswer] = useState({})
  const [buttonSelect, setButtonSelect] = useState(false)
  const [show, setShow] = useState(false)
  const [fullscreen, setFullscreen] = useState(true)
  const [loggedInUser, setLoggedInUser] = useLoginData()
  const [previousAnswer, setPreviousAnswer] = usePreviousAnswer()
  const [questions, setQuestions] = useQuizData()
  const [allAnswers, setAllAnswers] = useState([])

  // answer submit
  const handleSubmitAnswer = () => {
    const newAnswer = [...previousAnswer, allAnswers]
    setPreviousAnswer([...newAnswer])
    setShow(true)
    setFullscreen(true)
    setButtonSelect(true)
  }

  // set previous answer in localStorage
  useEffect(() => {
    localStorage.setItem('previous-answer', JSON.stringify(previousAnswer))
  }, [previousAnswer])

  return (
    <div className='container'>
      {loggedInUser?.email ? (
        <div>
          {questions.length > 0 ? (
            <h1 className='my-5'>Make Your Answer</h1>
          ) : (
            <h1 className='my-5'>Add some questions</h1>
          )}
        </div>
      ) : (
        <h1 className='my-5'>Please Login and play quiz</h1>
      )}
      {staticData.map(element => (
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

      {loggedInUser?.email && (
        <>
          <button
            onClick={() => handleSubmitAnswer()}
            className='btn btn-warning m-5'
            disabled={buttonSelect}
          >
            Submit Answer
          </button>
          <button
            onClick={() => window.location.reload(false)}
            className='btn btn-danger'
          >
            Play Again
          </button>
        </>
      )}

      <ResultModal
        fullscreen={fullscreen}
        show={show}
        setShow={setShow}
        allAnswers={allAnswers}
        setAllAnswers={setAllAnswers}
        previousAnswer={previousAnswer}
        setPreviousAnswer={setPreviousAnswer}
      />
    </div>
  )
}

export default Quiz
