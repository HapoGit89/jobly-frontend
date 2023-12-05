import { render, screen } from '@testing-library/react';
import CompanyList from './CompanyList';
import App from '../../App';
import * as api from "../../api"

jest.mock("../../api");

// Smoke Test

it('renders without crashing', () => {

render(<App>
    <CompanyList />
</App>);
});


