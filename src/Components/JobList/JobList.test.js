import { render, screen } from '@testing-library/react';
import App from '../../App';
import JobList from './JobList';
import userContext from '../../userContext';

// Smoke Test

it('renders without crashing', () => {
    const user = {username: "Hannes", token: "asgahgshgs"}
render(<userContext.Provider value={user}>
      <JobList applyJob={()=>{return}}/>
</userContext.Provider>
  
);
});


