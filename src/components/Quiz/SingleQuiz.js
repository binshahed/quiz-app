import { Button } from 'bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'

const SingleQuiz = props => {
  const { element } = props
  return (
    <div>
      {/* <Card.Header>
        
      </Card.Header> */}
      <Card.Body>
        <h3> {element.name} </h3>

        {element.options.map((option, index) => (
          <button key={index}  style={{ width: '40%' }} className='btn btn-primary m-3 py-3'>
            {option}
          </button>
        ))}
      </Card.Body>
    </div>
  )
}

export default SingleQuiz
