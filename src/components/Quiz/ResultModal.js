import React, { useState } from 'react'
import {  Modal, Table } from 'react-bootstrap'
import useLoginData from '../../hooks/useLoginData'
import usePreviousAnswer from '../../hooks/usePreviousAnswer'

const ResultModal = ({
  show,
  fullscreen,
  setShow,
  allAnswers,
  setAllAnswers
}) => {
  const [loggedInUser, setLoggedInUser] = useLoginData()
  const [previousAnswer, setPreviousAnswer] = usePreviousAnswer()
  const allPreviousAnswer = previousAnswer.flat()

  // logged user previous answer
  const myPreviousAnswer = allPreviousAnswer.filter(
    answer => loggedInUser.email === answer.user
  )

  return (
    <div>
      <>
        <Modal
          fullscreen={fullscreen}
          show={show}
          onHide={() => setShow(false)}
          dialogClassName='modal-100w'
          aria-labelledby='example-custom-modal-styling-title'
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div>
              <div className='row'>
                {/* currentAnswer section   */}
                <div className='col-md-6'>
                  <h2 className='text-center'>Result</h2>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allAnswers.map(answer => (
                        <tr key={answer.id}>
                          <td>{answer.name}</td>
                          <td>{answer.userAnswer}</td>
                          <td>{answer?.correctAnswer || answer.userAnswer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>

                {/* previousAnswer section  */}
                <div className='col-md-6'>
                  <h2 className='text-center'>Previous Result</h2>

                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myPreviousAnswer.map(answer => (
                        <tr key={answer.id}>
                          <td>{answer.name}</td>
                          <td>{answer.userAnswer}</td>
                          <td>{answer?.correctAnswer || answer.userAnswer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
            <div></div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  )
}

export default ResultModal
