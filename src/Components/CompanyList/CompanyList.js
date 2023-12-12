import {React, useContext} from "react"
import CompanyCard from "../CompanyCard/CompanyCard"
import "./CompanyList.css"
import SearchForm from "../SearchForm/SearchForm"
import userContext from "../../userContext"
import useCompanies from "../../Hooks/useCompanies"

function CompanyList(){
  const user = useContext(userContext)
  let {companies, searchCompanies, error} = useCompanies()

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
          {companies.map((el,id)=>(<div className="CompanyCard" key={id}><CompanyCard company={el}/></div>))}
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