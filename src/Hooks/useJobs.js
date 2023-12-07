
import React, {useState, useEffect} from "react"
import { JoblyApi } from "../api"


const useJobs = ()=>{
        const [jobs, setJobs] = useState([])
        const [error, setError] = useState(null)

       

    useEffect(()=>{
    const getJobs = async ()=>{
        let res = await JoblyApi.getAllJobs() 
        setJobs(res.jobs) 
      }
      try {
      getJobs()}
      catch (e) {
        setError(e)
      }
    }, [])

    const searchJobs = async (title)=>{
        try {
            let res = await JoblyApi.findAllJobs(title)
             setJobs(res.jobs)}
        catch(e){
            setError(e)
                      }
      }

      return {jobs,searchJobs,error}
        }

    export default useJobs



// const getCompanies = async ()=>{
//     let res = await JoblyApi.getAllCompanies()   
//     setCompanies(res.companies) 
//   }
//   getCompanies()


// // Search function triggered by searchForm
// const searchCompanies = async (name)=>{
//   let res = await JoblyApi.findAllCompanies(name)
//   setCompanies(res.companies)
// }

