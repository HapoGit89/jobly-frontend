import { render, screen } from '@testing-library/react';
import CompanyCard from './CompanyCard';
import { BrowserRouter } from 'react-router-dom';

const company = {
    "company": {
        "handle": "ayala-buchanan",
        "name": "Ayala-Buchanan",
        "description": "Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.",
        "numEmployees": 309,
        "logoUrl": null,
        "jobs": [
            {
                "id": 77,
                "title": "Engineering geologist",
                "salary": 89000,
                "equity": "0.043"
            },
            {
                "id": 85,
                "title": "Haematologist",
                "salary": 63000,
                "equity": "0.062"
            },
            {
                "id": 99,
                "title": "Operational researcher",
                "salary": 167000,
                "equity": "0.020"
            },
            {
                "id": 129,
                "title": "Scientist, research (physical sciences)",
                "salary": 117000,
                "equity": "0.090"
            },
            {
                "id": 143,
                "title": "Ranger/warden",
                "salary": 86000,
                "equity": "0.095"
            },
            {
                "id": 157,
                "title": "Scientist, research (life sciences)",
                "salary": 157000,
                "equity": "0.057"
            },
            {
                "id": 170,
                "title": "Dietitian",
                "salary": 198000,
                "equity": "0"
            },
            {
                "id": 186,
                "title": "Psychologist, sport and exercise",
                "salary": 172000,
                "equity": "0.061"
            },
            {
                "id": 198,
                "title": "Learning disability nurse",
                "salary": 66000,
                "equity": null
            }
        ]
    }
}

// Smoke Test

it('renders without crashing', () => {
render(<BrowserRouter>
<CompanyCard company={company}/>
</BrowserRouter>);
});

// Snapshot test

it('matches snapshot', () => {
    const {asFragment}=render(<BrowserRouter>
    <CompanyCard company={company}/>
    </BrowserRouter>);
    expect(asFragment).toMatchSnapshot()
    });


