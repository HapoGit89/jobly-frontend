import { render, screen } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import MyNavBar from './MyNavBar';

// Smoke Test

it('renders without crashing', () => {
render(<BrowserRouter>
  <MyNavBar user={{username: "test", token: "asjhasjhajhsjhjhdj"}}logOut={()=>{return "logOut"}}/>
  </BrowserRouter>
      )
});


