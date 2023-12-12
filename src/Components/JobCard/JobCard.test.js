import { render } from '@testing-library/react';
import JobCard from './JobCard';
import userContext from '../../userContext';
import { BrowserRouter } from 'react-router-dom';

const job = {
	"id": 200,
	"title": "Accommodation manager",
	"salary": 126000,
	"equity": null,
	"companyHandle": "mejia-scott-ryan",
	"companyName": "Mejia, Scott and Ryan"
}

// Smoke Test

it('renders without crashing', () => {
	const user = {username: "Hannes", token: "ajhsjhsjhs", applications: []}
	render(<BrowserRouter>
		<userContext.Provider value={user}>
			<JobCard applyJob={()=>{return "Hello"}} job={job}/>
		</userContext.Provider>
		</BrowserRouter>)

});

// Snapshot Test

it('matches Snapshot', () => {
	const user = {username: "Hannes", token: "ajhsjhsjhs", applications: []}
	const {asFragment} = render(<BrowserRouter>
		<userContext.Provider value={user}>
			<JobCard applyJob={()=>{return "Hello"}} job={job}/>
		</userContext.Provider>
		</BrowserRouter>)	
		expect(asFragment).toMatchSnapshot()
});


