
import './App.css';
import {React, useState, useEffect} from "react"
import CompanyList from './Components/CompanyList/CompanyList';
import JobList from './Components/JobList/JobList';
import MyNavBar from './Components/NavBar/MyNavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompanyDetails from './Components/CompanyDetails/CompanyDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import UserForm from './Components/UserForm/UserForm';
import Home from './Components/Home/Home';
import { JoblyApi } from './api';
import userContext from './userContext';


function App() {
  const [user, setUser] = useState({})


  // catch userdata and set API Token when App mounts, cleanUp resets Api token
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


  // gets userdata for given username and stores it in State
  const getUser = async(username)=>{
    const res = await JoblyApi.getUser(username)
    setUser({...res.user, token: JoblyApi.token})   
  }


  // User Login leads to localStorage Update, Api Token Update and State Update
  const logIn = (data)=>{
    console.log(data)
    localStorage.setItem("username", data.username)
    localStorage.setItem("token", data.token)
    JoblyApi.token = data.token
    getUser(data.username)
  }

  // clear localStorage when Logout and clear Api Token
  const logOut = ()=>{
    localStorage.clear()
    JoblyApi.token = ""
  }

  // Update Userdata via JoblyApi.patchUser func
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

  // Apply current user to given JobId
  const applyJob = async (jobId)=>{
    console.log(jobId)
    try{
    const res = await JoblyApi.ApplyForJob(user.username, jobId)
    if (res.applied){
      alert(`You just applied for Job ${res.applied}`)
      getUser(user.username)
    }
    }
    catch(e){
      alert(`Oops something went wrong!`)
    }
  }


  return (
    <div className="App">
      <userContext.Provider value={user}>
   <BrowserRouter>
        <MyNavBar user={user} logOut={logOut}/>
        <Routes>
          <Route exact path="/companies" element={<CompanyList/>}></Route>    
          <Route exact path="/jobs" element={<JobList applyJob={applyJob}/>}></Route>  
          <Route exact path="/companies/:handle" element={<CompanyDetails applyJob={applyJob}/>}></Route>
          <Route exact path="/login" element={<LoginForm logIn={logIn}/>}></Route>   
          <Route exact path="/signup" element={<SignUpForm logIn={logIn}/>}></Route> 
          <Route exact path="/user/:username" element={<UserForm patchUser={patchUser}/>}></Route> 
          <Route exact path="/" element={<Home/>}></Route>    
        </Routes>
        </BrowserRouter>
        </userContext.Provider>
    </div>
  );
}

export default App;
