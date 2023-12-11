import { render, waitFor,screen, fireEvent} from '@testing-library/react';
import CompanyList from './CompanyList';
import App from '../../App';
import userContext from '../../userContext';
import useCompanies from '../../Hooks/useCompanies';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


const companies = {
    "companies": [
        {
            "handle": "anderson-arias-morrow",
            "name": "Anderson, Arias and Morrow",
            "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
            "numEmployees": 245,
            "logoUrl": "/logos/logo3.png"
        },
        {
            "handle": "arnold-berger-townsend",
            "name": "Arnold, Berger and Townsend",
            "description": "Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.",
            "numEmployees": 795,
            "logoUrl": null
        },]}
  

// Smoke Test

it('renders without crashing', () => {
    const user = {username: "Hannes", token: "askakjskjskjs"}

render(<userContext.Provider value={user}>
     <CompanyList />
</userContext.Provider>
   
);
});


// Snapshot Test


it('matches Snapshot', async () => {
    const user = {username: "Hannes", token: "askakjskjskjs"}

const {asFragment}=act(()=>{render(<userContext.Provider value={user}>
     <CompanyList />
</userContext.Provider>)})

expect(asFragment).toMatchSnapshot()
});



it('renders company details', async() => {
    const comp = companies
    jest.mock('../../Hooks/useCompanies',()=>({
        useCompanies: ()=>({companies: comp})
    }))
    
            const user = {username: "Hannes", token: "askakjskjskjs"}

        const {getByText}=act(()=>{render(<userContext.Provider value={user}>
            <BrowserRouter>
            <CompanyList />
            </BrowserRouter>
            </userContext.Provider>)})

            await waitFor(()=>expect(screen.getByText("Anderson, Arias and Morrow")).toBeInTheDocument())

            expect(screen.getByText("Arnold, Berger and Townsend")).toBeInTheDocument()
});


it('shows search results', async()=>{
    const user = {username: "Hannes", token: "askakjskjskjs"}
    const comp = companies
    jest.mock('../../Hooks/useCompanies',()=>({
        useCompanies: ()=>({companies: comp})

    }))
   
   const {getByText}=act(()=>{render(<userContext.Provider value={user}>
        <BrowserRouter>
        <CompanyList />
        </BrowserRouter>
        </userContext.Provider>)})
        
    const input = screen.getByLabelText("Search for:")
    const subbutton = screen.getByText("Submit")

    fireEvent.change(input, {target: {value: "arnold"}})
    fireEvent.click(subbutton)

    await waitFor(()=>{
        expect(screen.queryByText("Anderson, Arias and Morrow")).toBeNull()
        expect(screen.getByText("Arnold, Berger and Townsend")).toBeInTheDocument()
    })


  
})




