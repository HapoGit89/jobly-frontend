import logo from './logo.svg';
import './App.css';
import React from "react"
import CompanyList from './CompanyList';
import JobList from './JobList';
import MyNavBar from './MyNavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyCard from './CompanyCard';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <MyNavBar/>
        <Routes>
          <Route exact path="/companies" element={<CompanyList/>}></Route>    
          <Route exact path="/jobs" element={<JobList/>}></Route>  
          <Route exact path="/companies/:handle" element={<CompanyDetails/>}></Route>  
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
