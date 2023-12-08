import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginForm from './LoginForm';

// Smoke Test

it('renders without crashing', () => {
render(
    <BrowserRouter>
        <LoginForm/>
    </BrowserRouter>
   
);
});


