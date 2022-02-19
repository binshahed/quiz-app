import React, { useEffect, useState } from 'react'
import { ButtonGroup, Card, ToggleButton } from 'react-bootstrap'
import useLoginData from '../../hooks/useLoginData'

const SingleQuiz = ({
  element,
  setSelectedAnswer,
  allAnswers,
  setAllAnswers
}) => {
  const [buttonSelect, setButtonSelect] = useState(false)
  const [loggedInUser, setLoggedInUser] = useLoginData()
  // const [myButton, setMyButton] = useState('')

  // const btnStyle = 'text-danger'

  const handleQuestionAnswer = option => {
    if (option === element.answer) {
      const gotAnswer = {
        user: loggedInUser?.email,
        id: element.id,
        name: element.name,
        userAnswer: element.options[option]
        // correctAnswer: element.options[element.answer]
      }
      setSelectedAnswer(gotAnswer)
      setAllAnswers([...allAnswers, gotAnswer])
      setButtonSelect(true)
      // setMyButton(btnStyle)
    } else {
      const gotAnswer = {
        user: loggedInUser?.email,
        id: element.id,
        name: element.name,
        userAnswer: element.options[option],
        correctAnswer: element.options[element.answer]
      }
      setSelectedAnswer(gotAnswer)
      setAllAnswers([...allAnswers, gotAnswer])
      setButtonSelect(true)
      // setMyButton(btnStyle)
    }
  }




  return (
    <div>
      <Card.Body>
        <p className="fs-3 mx-5 px-5"> {element.name} </p>

        {/* {Object.keys(element.options).map((option, index) => ( */}
        {Object.keys(element.options).map((option, index) => (
          <button
            onClick={() => handleQuestionAnswer(option)}
            key={index}
            style={{ width: '40%' }}
            className={`btn btn-secondary m-3 py-3 `}
            disabled={buttonSelect}
          >
            {element.options[option]}
          </button>
        ))}
      </Card.Body>
    </div>
  )
}

export default SingleQuiz
