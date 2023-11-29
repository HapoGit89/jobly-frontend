import { useParams } from "react-router-dom"
import { useEffect, useState} from "react"
import { JoblyApi } from "./api"
import JobCard from "./JobCard"
import "./CompanyDetails.css"


function CompanyDetails(){
    const {handle} = useParams()
    const [data, setData] = useState(null)
    console.log(data)

    useEffect(()=>{
        const getCompanyData = async()=>{
            const res = await JoblyApi.request(`companies/${handle}`)  
            setData(res.company)}
            getCompanyData()
            
    }, [])

    if(data){  return (
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
  
}

export default CompanyDetails