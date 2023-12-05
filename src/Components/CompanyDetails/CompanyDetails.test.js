import { render, screen } from '@testing-library/react';
import CompanyDetails from './CompanyDetails';

// Smoke Test

it('renders without crashing', () => {
render(<CompanyDetails applyJob={()=> {return ("Hello")} }/>);
});


