import { render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import SearchForm from './SearchForm';

// Smoke Test

it('renders without crashing', () => {
render(<SearchForm searchFunc={()=>{return "Search"}}/>
      )
});


