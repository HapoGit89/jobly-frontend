import { useParams } from "react-router-dom"
import { useEffect, useState, useContext} from "react"
import { JoblyApi } from "../../api"
import JobCard from "../JobCard/JobCard"
import "./CompanyDetails.css"
import userContext from "../../userContext"


function CompanyDetails({applyJob}){
  // Shows company details for given handle via params
    const {handle} = useParams()
    const [data, setData] = useState(null)
    const user = useContext(userContext)
    
    // get company info for given handle via JoblyApi and update State
    useEffect(()=>{
        const getCompanyData = async()=>{
            const res = await JoblyApi.request(`companies/${handle}`)  
            setData(res.company)
            }
            getCompanyData()
    }, [])

    if(data && user.token){  //conditional render protects route 
      return (
        <div className="CompanyDetails"> 
            <div className="companyInfo">
            <h1>
            {data.name}</h1>
            <h2>{data.description}</h2>
            </div>
            <div className="Jobs">
                {data.jobs.map(el=>(<div className="JobCard"><JobCard job={el} applyJob={applyJob}/></div>))}
            </div>
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

export default CompanyDetails