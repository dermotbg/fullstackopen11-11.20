import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FrontPage from '../components/FrontPage/index'

describe('Homepage', () => {
  it('should render items', () => {
    render(
      <FrontPage />,
    )
    expect(screen.getByText('Welcome')).toBeVisible()
    expect(screen.getByText('Messages')).toBeVisible()
  })
})
