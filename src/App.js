import logo from './logo.svg';
import './App.css';
import {React, useState} from "react"
import CompanyList from './CompanyList';
import JobList from './JobList';
import MyNavBar from './MyNavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import UserForm from './UserForm';
import Home from './Home';


function App() {
  const [user, setUser] = useState({})

  const logIn = (data)=>{
    setUser(data)
  }

  return (
    <div className="App">
   <BrowserRouter>
        <MyNavBar user={user}/>
        <Routes>
          <Route exact path="/companies" element={<CompanyList user={user}/>}></Route>    
          <Route exact path="/jobs" element={<JobList user={user}/>}></Route>  
          <Route exact path="/companies/:handle" element={<CompanyDetails user={user}/>}></Route>
          <Route exact path="/login" element={<LoginForm logIn={logIn}/>}></Route>   
          <Route exact path="/signup" element={<SignUpForm logIn={logIn}/>}></Route> 
          <Route exact path="/user" element={<UserForm/>}></Route> 
          <Route exact path="/" element={<Home user={user}/>}></Route>    
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
