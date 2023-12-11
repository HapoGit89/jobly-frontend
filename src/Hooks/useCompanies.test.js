import useCompanies from "./useCompanies";
import { renderHook } from "@testing-library/react";
import { JoblyApi } from "../api";
import {waitFor } from "@testing-library/react";
import axios from "axios";


jest.mock("../api")

// unit Test
 test("should render the initial companies", async () => {
    
        const companies = {
            "companies": [
                {
                    "handle": "anderson-arias-morrow",
                    "name": "Anderson, Arias and Morrow",
                    "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
                    "numEmployees": 245,
                    "logoUrl": "/logos/logo3.png"
                },
                {
                    "handle": "arnold-berger-townsend",
                    "name": "Arnold, Berger and Townsend",
                    "description": "Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.",
                    "numEmployees": 795,
                    "logoUrl": null
                },]}
          
                JoblyApi.getAllCompanies.mockResolvedValue(companies)

                const { result, waitForNextUpdate } = renderHook(() => useCompanies())

                expect(result.current.companies).toEqual([])

                await waitFor(()=>expect(result.current.companies.length).not.toBe(0))
                
                expect(result.current.companies).toBe(companies.companies)
  ;
  
      });



