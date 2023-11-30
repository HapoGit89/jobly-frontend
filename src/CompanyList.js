import {React, useEffect,useState} from "react"
import { JoblyApi } from "./api"
import CompanyCard from "./CompanyCard"
import "./CompanyList.css"
import SearchForm from "./SearchForm"

function CompanyList({user}){
    const [companies, setCompanies] = useState([])
    let isLoading = true

    const searchCompanies = async (name)=>{
      let res = await JoblyApi.findAllCompanies(name)
      setCompanies(res.companies)

    }

    useEffect(()=>{
     const getCompanies = async ()=>{
        let res = await JoblyApi.getAllCompanies()   
        isLoading=false
        console.log(res)
        setCompanies(res.companies)
        
      }
       
      getCompanies()
      

    }, [])

    

    if (user.token){
    return(

        <div className="CompanyList">
            <SearchForm searchFunc={searchCompanies}/>
          {companies.map(el=>(<div className="CompanyCard"><CompanyCard company={el}/></div>))}
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

export default CompanyList