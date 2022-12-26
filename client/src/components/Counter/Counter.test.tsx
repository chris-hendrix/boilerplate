import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Counter from './Counter'

import { expect } from '@jest/globals'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from 'store'

const renderWithContext = (element: React.ReactNode) => render(<Provider store={store}>{element}</Provider>)
export { expect, renderWithContext, render, screen, userEvent }


describe('<Counter />', () => {

  let container: HTMLElement

  beforeEach(() => {
    container = renderWithContext(<Counter initialIncrement={2} />).container
  })

  test('content is rendered', () => {
    const button = screen.getByText('Add Async')
    expect(button).toBeDefined()
  })

  test('clicking add async increments value', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('Add Amount')
    await user.click(button)
    await user.click(button)

    const countBox = container.querySelector('.countBox')
    expect(countBox).toBeDefined()
    expect(countBox?.textContent?.includes('4')).toBeTruthy()
  })
})

