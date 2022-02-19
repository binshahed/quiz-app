import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const UpdateDataCard = props => {
  const { questions, question, setQuestions } = props

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    const updatedData = questions.map(element => {
      if (element.id === question.id) {
        return {
          ...element,
          name: data.name,
          a: data.a,
          b: data.b,
          c: data.c,
          d: data.d
        }
      }
      return element
    })
    setQuestions(updatedData)
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Update Quiz
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form style={{ width: '80%' }} onSubmit={handleSubmit(onSubmit)}>
          <input
            className='form-control m-4'
            defaultValue={question?.name}
            placeholder='Question'
            {...register('name', { required: true })}
          />
          <input
            className='form-control m-4'
            defaultValue={question?.options?.a}
            placeholder='Option: A'
            {...register('a', { required: true })}
          />
          <input
            className='form-control m-4'
            defaultValue={question?.b}
            placeholder='Option: B'
            {...register('b', { required: true })}
          />
          <input
            className='form-control m-4'
            defaultValue={question?.c}
            placeholder='Option: C'
            {...register('c', { required: true })}
          />
          <input
            className='form-control m-4'
            defaultValue={question?.d}
            placeholder='Option: D'
            {...register('d', { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <button closeButton className='btn btn-primary' type='submit'>
            Update
          </button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default UpdateDataCard
