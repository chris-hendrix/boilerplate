import React from 'react'
import { expect } from '@jest/globals'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import store from 'store'

const renderWithContext = (element: React.ReactNode) => render(<Provider store={store}>{element}</Provider>)

export { expect, renderWithContext, render, screen, userEvent }