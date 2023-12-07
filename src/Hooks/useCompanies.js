
import React, {useState, useEffect} from "react"
import { JoblyApi } from "../api"


const useCompanies = ()=>{
        const [companies, setCompanies] = useState([])
        const [error, setError] = useState(null)

        // get company list from JoblyApi and update State
        useEffect(()=>{
        const getCompanies = async ()=>{
            let res = await JoblyApi.getAllCompanies()   
            setCompanies(res.companies) 
        }
        try {
        getCompanies()}
        catch(e){
            setError(e)
        }
        }, [])

        // Search function triggered by searchForm
        const searchCompanies = async (name)=>{
            try{
        let res = await JoblyApi.findAllCompanies(name)
        setCompanies(res.companies)}
        catch (e){
            setError(e)
        }
        }

        return {companies, searchCompanies, error}
        }

        export default useCompanies



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

