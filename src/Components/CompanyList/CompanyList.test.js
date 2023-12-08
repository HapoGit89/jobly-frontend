import { render, screen } from '@testing-library/react';
import CompanyList from './CompanyList';
import App from '../../App';
import userContext from '../../userContext';


// Smoke Test

it('renders without crashing', () => {
    const user = {username: "Hannes", token: "askakjskjskjs"}

render(<userContext.Provider value={user}>
     <CompanyList />
</userContext.Provider>
   
);
});


