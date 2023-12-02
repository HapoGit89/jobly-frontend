
import './App.css';
import {React, useState, useEffect} from "react"
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
import { JoblyApi } from './api';





function App() {
  const [user, setUser] = useState({})

  const getUser = async(username)=>{
    const res = await JoblyApi.getUser(username)
    setUser({...res.user, token: JoblyApi.token})   
  }


  useEffect(()=>{
    let username = localStorage.getItem("username")
    let token = localStorage.getItem("token")
    if (username && token){
      JoblyApi.token = token
      getUser(username)
    }
    return () => {
      JoblyApi.token=""
  }
  },[])
 
  const logIn = (data)=>{
    console.log(data)
    localStorage.setItem("username", data.username)
    localStorage.setItem("token", data.token)
    JoblyApi.token = data.token
    getUser(data.username)
    
   
  }
  const logOut = ()=>{
    localStorage.clear()
  }

  const patchUser= async(data)=>{
    console.log(data)
    const res = await JoblyApi.patchUser(user.username, data)
    if (res.user.username){
      alert (`Saved new Details for ${res.user.username}`)
      getUser(res.user.username)
    }
    else{
      alert(`Something went wrong please try again!`)
    }

  }


  return (
    <div className="App">
   <BrowserRouter>
        <MyNavBar user={user} logOut={logOut}/>
        <Routes>
          <Route exact path="/companies" element={<CompanyList user={user}/>}></Route>    
          <Route exact path="/jobs" element={<JobList user={user}/>}></Route>  
          <Route exact path="/companies/:handle" element={<CompanyDetails user={user}/>}></Route>
          <Route exact path="/login" element={<LoginForm logIn={logIn}/>}></Route>   
          <Route exact path="/signup" element={<SignUpForm logIn={logIn}/>}></Route> 
          <Route exact path="/user/:username" element={<UserForm userdata={user} patchUser={patchUser}/>}></Route> 
          <Route exact path="/" element={<Home user={user}/>}></Route>    
        </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
