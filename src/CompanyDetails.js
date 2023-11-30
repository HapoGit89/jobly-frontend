import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import { JoblyApi } from "./api"
import JobCard from "./JobCard"
import "./CompanyDetails.css"


function CompanyDetails({user}){
    const {handle} = useParams()
    const [data, setData] = useState(null)
    console.log(data)

    useEffect(()=>{
        const getCompanyData = async()=>{
            const res = await JoblyApi.request(`companies/${handle}`)  
            setData(res.company)}
            getCompanyData()
            
    }, [])

    if(data && user.token){  return (
        <div className="CompanyDetails"> 
            <div className="companyInfo">
            <h1>
            {data.name}</h1>
            <h2>{data.description}</h2>
            </div>
            <div className="Jobs">
                {data.jobs.map(el=>(<div className="JobCard"><JobCard job={el}/></div>))}

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