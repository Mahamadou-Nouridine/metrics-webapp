import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../routes/Home';
import store from '../redux/store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('<Home />', () => {
  const initialState = {
    countries: [
      { name: 'Country 1', flag: 'https://country-1-flag.png', area: 30000 },
      { name: 'Country 2', flag: 'https://country-2-flag.png', area: 30000 },
      { name: 'Country 3', flag: 'https://country-3-flag.png', area: 30000 },
    ],
    error: undefined,
    isLoading: false,
    currentPage: '',
  };
  const mockedData = initialState;

  beforeEach(() => {
    useSelector.mockReturnValue(mockedData);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should displays all countries on load', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    const countryImages = screen.getAllByRole('img', { name: '' });
    expect(countryImages).toHaveLength(mockedData.countries.length);
  });

  it('Should filters countries based on search', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );

    const searchInput = screen.getByPlaceholderText('country name ...');
    fireEvent.change(searchInput, { target: { value: 'country 2' } });

    const filteredCountries = screen.getAllByRole('link', { name: /^country/i });
    expect(filteredCountries).toHaveLength(1);
  });
});
