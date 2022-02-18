import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

const SingleQuiz = props => {
  const { element } = props
  console.log(element)
  const myOptions = element.options
  console.log(myOptions)
  return (
    <div>
      <Card.Body>
        <h3> {element.name} </h3>

        {/* {Object.keys(element.options).map((option, index) => ( */}
        {Object.values(element.options).map((option, index) => (
          <button
            key={index}
            style={{ width: '40%' }}
            className='btn btn-primary m-3 py-3'
          >
            {option}
          </button>
        ))}
      </Card.Body>
    </div>
  )
}

export default SingleQuiz
