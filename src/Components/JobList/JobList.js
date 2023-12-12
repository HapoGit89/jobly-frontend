import {React, useContext} from "react"

import JobCard from "../JobCard/JobCard"
import "./JobList.css"
import SearchForm from "../SearchForm/SearchForm"
import userContext from "../../userContext"
import useJobs from "../../Hooks/useJobs"


function JobList({applyJob}){
    let {jobs, searchJobs, error} = useJobs()
    const user = useContext(userContext)


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