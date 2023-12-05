import {React, useEffect,useState, useContext} from "react"
import { JoblyApi } from "../../api"
import JobCard from "../JobCard/JobCard"
import "./JobList.css"
import SearchForm from "../SearchForm/SearchForm"
import userContext from "../../userContext"


function JobList({applyJob}){
    const [jobs, setJobs] = useState([])
    const user = useContext(userContext)
   


    useEffect(()=>{
     const getJobs = async ()=>{
        let res = await JoblyApi.getAllJobs() 
        setJobs(res.jobs) 
      }
      getJobs()
    }, [])

    // use JoblyApi to search in db and update State
    const searchJobs = async (title)=>{
                      let res = await JoblyApi.findAllJobs(title)
                      setJobs(res.jobs)
      }

    if(user.token){
    return(
        <div className="JobList">
          <SearchForm searchFunc={searchJobs}/>
          {jobs.map((el,idx)=>(<div className="JobCard" key={idx}><JobCard job={el} applyJob={applyJob}/></div>))}
        </div>
    )}
    
    else{
      return (
        <div>
          <h1>Please log in to see this page</h1>
        </div>
      )
    }

}

export default JobList