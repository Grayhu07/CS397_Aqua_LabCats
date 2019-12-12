import React from 'react'
import {render, getByText, fireEvent} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Clicking on past studies should change visible studies', () => {
  const {queryByTestId} = render(<Dashboard/>)

  fireEvent.click(queryByTestId('Past Studies'))
  expect(queryByTestId('studiesTable')).toBeTruthy();
  expect(queryByTestId('upcomingStudies')).toBeNull();
  expect(queryByTestId('pastStudies')).toBeTruthy();
})