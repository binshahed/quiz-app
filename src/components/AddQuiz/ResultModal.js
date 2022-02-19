import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import useLoginData from '../../hooks/useLoginData'

const ResultModal = ({ show, fullscreen, setShow, allAnswers }) => {
  const [loggedInUser, setLoggedInUser] = useLoginData()



  const handleStartAgain=() => {
      
  }

  console.log(allAnswers)
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
                <div className='col-md-6'>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Your Answer</th>
                        <th>Correct Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allAnswers.map(
                        answer => (
                          //   loggedInUser.email === answer.email && (
                          <tr key={answer.id}>
                            <td>{answer.name}</td>
                            <td>{answer.userAnswer}</td>
                            <td>
                              {answer?.correctAnswer || answer.userAnswer}
                            </td>
                          </tr>
                        )
                        //   )
                      )}
                    </tbody>
                  </Table>
                </div>
                <div className='col-md-6'></div>
              </div>
            </div>
            <div>
            <button className='btn btn-primary' onClick={handleStartAgain}>Start Again</button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  )
}

export default ResultModal
