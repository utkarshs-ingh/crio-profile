import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Intro } from '../src/components/landing/Intro'

test('check for h1 font size change', async () => {
  const { getByRole } = render(<Intro />)
  let element = getByRole('heading', { level: 1 })
  expect(element).toHaveStyle({
    fontSize: '36pt'
  })
})
