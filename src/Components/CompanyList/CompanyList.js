import {React, useEffect,useState,useContext} from "react"
import { JoblyApi } from "../../api"
import CompanyCard from "../CompanyCard/CompanyCard"
import "./CompanyList.css"
import SearchForm from "../SearchForm/SearchForm"
import userContext from "../../userContext"
import useCompanies from "../../Hooks/useCompanies"

function CompanyList(){
  const user = useContext(userContext)
  let {companies, searchCompanies, error} = useCompanies()

  // let companies = data.companies
  // let error = data.error
  // let searchCompanies = data.searchCompanies
  // const [companies, setCompanies] = useState([])
    


  // // get company list from JoblyApi and update State
  //   useEffect(()=>{
  //    const getCompanies = async ()=>{
  //       let res = await JoblyApi.getAllCompanies()   
  //       setCompanies(res.companies) 
  //     }
  //     getCompanies()
  //   }, [])

  //   // Search function triggered by searchForm
  //   const searchCompanies = async (name)=>{
  //     let res = await JoblyApi.findAllCompanies(name)
  //     setCompanies(res.companies)
  //   }

    if (error){
      return (
        <div>
          <h1>Sorry something went wrong</h1>
        </div>
      )
    }
    if (user.token){  //Route protection
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