
import React from 'react'
import { render, waitFor } from '@testing-library/react'
import ContactForm from '../src/components/landing/Contact/ContactForm'
import userEvent from '@testing-library/user-event'

test('check for invalid email constraint', async () => {
  const { getByLabelText } = render(<ContactForm />)
  let nameElem = getByLabelText("name")
  let emailElem = getByLabelText("email")
  userEvent.click(emailElem)
  userEvent.type(emailElem, "aa")
  userEvent.click(nameElem)
  await waitFor(() => { })
  expect(emailElem.hasAttribute("error")).toBe(true)
  expect(emailElem.getAttribute("error")).toBe("Invalid email")
})
