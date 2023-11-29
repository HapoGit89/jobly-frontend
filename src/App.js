import logo from './logo.svg';
import './App.css';
import React from "react"
import CompanyList from './CompanyList';
import JobList from './JobList';
import MyNavBar from './MyNavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <MyNavBar/>
        <Routes>
          <Route exact path="/companies" element={<CompanyList/>}></Route>    
          <Route exact path="/jobs" element={<JobList/>}></Route>  
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
