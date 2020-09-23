import React from 'react'
import { render } from '@testing-library/react'
import { Projects } from '../src/components/landing/Projects'
const axios = require('axios').default
require('dotenv').config({
  path: '.env.development'
})

test('check for github token validity', async () => {
  let githubToken = process.env.GITHUB_TOKEN
  let response = await axios.get('https://api.github.com', {
    headers: {
      Authorization: `token ${githubToken}`
    }
  })
  expect(response.status).toBe(200)
})

test('check for correct rendering of projects', () => {
  const tree = render(<Projects />)
  expect(tree).toMatchSnapshot()
})
