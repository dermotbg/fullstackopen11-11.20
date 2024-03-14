import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import MessageList from '../components/MessageView/MessageList'

const messages = [
  {id: 1, body: 'The first message'},
  {id: 2, body: 'The second message'}
]

const deleteMessage = jest.fn()

describe('Message List', () => {
  it('Displays messages & fires deleteMessage', () => {
    render(
      <MessageList messages={messages} deleteMessage={deleteMessage} />
    )
    expect(screen.getByText('The first message')).toBeVisible()
    expect(screen.getByText('The second message')).toBeVisible()

    const buttons = screen.getAllByText('delete')
    fireEvent.click(buttons[0])
    expect(deleteMessage).toHaveBeenCalled()
    fireEvent.click(buttons[1])
    expect(deleteMessage).toHaveBeenCalledTimes(2)
  })
})