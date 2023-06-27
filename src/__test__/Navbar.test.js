import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import NavBar from '../Components/Navbar';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('NavBar', () => {
  beforeEach(() => {
    useSelector.mockReturnValue('Home');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should renders correctly', () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
