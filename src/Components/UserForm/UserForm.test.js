import { render, screen } from '@testing-library/react';
import App from '../../App';
import UserForm from './UserForm';
import userContext from '../../userContext';
import { BrowserRouter } from 'react-router-dom';

// Smoke Test

it('renders without crashing', () => {
    const user = {username: "hannes", token: "ajshajhjshajhjhs"}
render(<BrowserRouter>
            <userContext.Provider value={user}>
            <UserForm getUser={()=>{return "User"}}/>
            </userContext.Provider>
        </BrowserRouter>
      )
});

// Snapshot Test

it('matches Snapshot', () => {
    const user = {username: "hannes", token: "ajshajhjshajhjhs"}
    const {asFragment} = render(<BrowserRouter>
            <userContext.Provider value={user}>
            <UserForm getUser={()=>{return "User"}}/>
            </userContext.Provider>
        </BrowserRouter>
      )
    expect(asFragment).toMatchSnapshot()
});


