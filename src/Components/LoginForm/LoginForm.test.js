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


// Snapshot Test

it('matches Snapshot', () => {
   const {asFragment} = render(
        <BrowserRouter>
            <LoginForm/>
        </BrowserRouter>
    );
    expect(asFragment).toMatchSnapshot()
    });
    


