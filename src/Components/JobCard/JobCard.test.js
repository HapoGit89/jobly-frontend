import { render, screen } from '@testing-library/react';
import App from '../../App';
import JobCard from './JobCard';

// Smoke Test

it('renders without crashing', () => {
render(<App>
    <JobCard applyJob={()=>{return "Hello"}} job={	
        {
			"id": 200,
			"title": "Accommodation manager",
			"salary": 126000,
			"equity": null,
			"companyHandle": "mejia-scott-ryan",
			"companyName": "Mejia, Scott and Ryan"
		}
        }/>
</App>);
});


