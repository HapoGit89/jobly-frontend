import { render, screen } from '@testing-library/react';
import App from '../../App';
import JobList from './JobList';

// Smoke Test

it('renders without crashing', () => {
render(<App>
    <JobList applyJob={()=>{return "Test"}}/>
</App>);
});


