import React, { useState, useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import UpdateDataCard from './UpdateDataCard'
import useLoginData from '../../hooks/useLoginData'

const AddQuiz = () => {
  const [questions, setQuestions] = useState([])

  const [modalShow, setModalShow] = React.useState(false)

  // React hook form to get data from Input
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [loggedInUser, setLoggedInUser] = useLoginData()

  const onSubmit = data => {
    data['id'] = new Date().getTime().toString()
    data['options'] = {
      a: data.a,
      b: data.b,
      c: data.c,
      d: data.d
    }
    const newData = {
      name: data.name,
      options: data.options,
      id: data.id,
      answer: data.answer
    }

    setQuestions([...questions, newData])
    // reset()
  }

  // Delete question
  const handleDelete = id => {
    const proceed = window.confirm('Are you sure? Delete This Item')
    if (proceed) {
      const deletedItem = questions.filter(elm => {
        return elm.id !== id
      })
      setQuestions(deletedItem)
    }
  }

  const [edit, setEdit] = useState()

  const handleUpdate = id => {
    setEdit(id)
    setModalShow(true)
    if (modalShow) {
      setEdit('')
    }
  }

  //get data from local storage
  useEffect(() => {
    let lsData = localStorage.getItem('allQuestions')
    if (lsData) {
      const data = JSON.parse(localStorage.getItem('allQuestions'))
      setQuestions(data)
    } else {
      return []
    }
  }, [])

  // set all quiz in local storage
  useEffect(() => {
    localStorage.setItem('allQuestions', JSON.stringify(questions))
  }, [questions])

  return (
    <div className='container'>
      {loggedInUser?.email === 'admin@admin.com' && (
        <>
          <h1 className='mt-4'>Add Quiz</h1>

          {/* form section  */}
          <div className='add-item'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className='form-control m-4'
                placeholder='Question'
                {...register('name', { required: true })}
              />
              <input
                className='form-control m-4'
                placeholder='Option: A'
                {...register('a', { required: true })}
              />
              <input
                className='form-control m-4'
                placeholder='Option: B'
                {...register('b', { required: true })}
              />
              <input
                className='form-control m-4'
                placeholder='Option: C'
                {...register('c', { required: true })}
              />
              <input
                className='form-control m-4'
                placeholder='Option: D'
                {...register('d', { required: true })}
              />

              <select {...register('answer')} className='form-control m-4'>
                <option value='a'>A</option>
                <option value='b'>B</option>
                <option value='c'>C</option>
                <option value='d'>D</option>
              </select>

              {errors.exampleRequired && <span>This field is required</span>}

              <input className='btn btn-primary' type='submit' />
            </form>
          </div>

          {/* data view section */}
          <div className='show-data mt-5'>
            {questions.map(question => (
              <Alert key={question.id} variant='primary'>
                <Row>
                  <Col className='text-start' sm={10}>
                    {question.name}
                  </Col>
                  <Col className='text-end' sm={2}>
                    <FontAwesomeIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleUpdate(question)}
                      icon={faPenToSquare}
                      className='m-2'
                      title='Update Question'
                    />
                    <FontAwesomeIcon
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDelete(question.id)}
                      icon={faTrash}
                      className='m-2'
                      title='Delete Question'
                    />
                  </Col>
                </Row>
              </Alert>
            ))}
          </div>
          <UpdateDataCard
            questions={questions}
            setQuestions={setQuestions}
            question={edit}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      )}
    </div>
  )
}

export default AddQuiz
