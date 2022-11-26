import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithContext, screen, userEvent } from 'utils/test'
import Counter from './Counter'


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

