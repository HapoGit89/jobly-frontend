import {React, useEffect,useState} from "react"
import { JoblyApi } from "./api"
import JobCard from "./JobCard"
import "./JobList.css"
import SearchForm from "./SearchForm"


function JobList({user}){
    const [jobs, setJobs] = useState([])
    let isLoading = true

    const searchJobs = async (title)=>{
      let res = await JoblyApi.findAllJobs(title)
      setJobs(res.jobs)

    }

    useEffect(()=>{
     const getJobs = async ()=>{
        let res = await JoblyApi.getAllJobs() 
        isLoading=false
        console.log(res)
        setJobs(res.jobs)
        
      }
       
      getJobs()
      

    }, [])

    

    if(user.token){
    return(

        <div className="JobList">
          <SearchForm searchFunc={searchJobs}/>
          {jobs.map(el=>(<div className="JobCard"><JobCard job={el}/></div>))}
        </div>
    )
    }
    else{
      return (
        <div>
          <h1>Please log in to see this page</h1>
        </div>
      )
    }

}

export default JobList