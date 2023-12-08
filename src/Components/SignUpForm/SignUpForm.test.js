import { render, screen } from '@testing-library/react';
import App from '../../App';
import SignUpForm from './SignUpForm';
import userContext from '../../userContext';
import { BrowserRouter } from 'react-router-dom';



// Smoke Test

it('renders without crashing', () => {
    const user = {username: "hannes", token: "ajshajhjshajhjhs"}
render(<BrowserRouter>
            <userContext.Provider value={user}>
           <SignUpForm logIn={()=>{return "Logged In"}}/>
            </userContext.Provider>
        </BrowserRouter>
      )
});