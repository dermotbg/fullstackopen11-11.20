import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import MessageForm from '../components/MessageView/MessageForm'

const handleSubmit = jest.fn()

const message = 'The first message'

describe('Message Form', () => {
  it('submits a message with valid data', () => {
    render(
      <MessageForm postMessage={postMessage}/>
      )
    const user = userEvent.setup()
    user.type(screen.getByRole('textbox'), message)
    user.click(screen.getByRole('button'))
    waitFor( () => {
      expect(handleSubmit).toBeCalled()
    })
  })
})