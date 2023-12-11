import { render, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import { JoblyApi } from './api';
import { BrowserRouter } from 'react-router-dom';


// Smoke Test

it('renders without crashing', () => {
render(<App />);
});

it('matches Snapshot', () => { 
const {asFragment} = render(<App/>)
expect(asFragment).toMatchSnapshot()
});

it('renders Login Link ', ()=> {
    const {getByText} = render(<App/>)
    expect(getByText("Login")).toBeInTheDocument()
})

it('renders Login Form when clicking Login Link ', ()=> {
    const {getByText, getByLabelText} = render(<App/>)
   const button = getByText("Login")
   fireEvent.click(button)
   expect(getByLabelText("Password")).toBeInTheDocument()
   expect(getByText("Login:")).toBeInTheDocument()
})

it('renders Signup Form when clicking Signup Link ', ()=> {
    const {getByText, getByLabelText, debug} = render(<App/>)
   const button = getByText("Signup")
   fireEvent.click(button)
   expect(getByLabelText("Password:")).toBeInTheDocument()
   expect(getByText("Sign Up For Jobly:")).toBeInTheDocument()
})






