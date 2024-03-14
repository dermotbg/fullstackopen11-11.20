import React from 'react'
import FrontPage from '../components/FrontPage/index'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Homepage', () => {
  it('should render items', () => {
    render(
      <FrontPage />
    )
    expect(screen.getByText('Welcome')).toBeVisible()
    expect(screen.getByText('Messages')).toBeVisible()
  })
})