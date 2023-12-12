import { render} from '@testing-library/react';
import CompanyDetails from './CompanyDetails';

// Smoke Test

it('renders without crashing', () => {
render(<CompanyDetails applyJob={()=> {return ("Hello")} }/>);
});


// Snapshot Test

it('matches Snapshot', () => {
    const {asFragment} = render(<CompanyDetails applyJob={()=> {return ("Hello")} }/>);
    expect(asFragment).toMatchSnapshot()
    });




