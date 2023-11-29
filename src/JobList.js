import {React, useEffect,useState} from "react"
import { JoblyApi } from "./api"
import JobCard from "./JobCard"
import "./JobList.css"
import SearchForm from "./SearchForm"


function JobList(){
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

    


    return(

        <div className="JobList">
          <SearchForm searchFunc={searchJobs}/>
          {jobs.map(el=>(<div className="JobCard"><JobCard job={el}/></div>))}
        </div>
    )

}

export default JobList