import useJobs from "./useJobs";
import { renderHook } from "@testing-library/react";
import { JoblyApi } from "../api";
import {waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axios from "axios";


jest.mock("../api")

// unit Test
 test("should render the initial jobs", async () => {
    
        const jobs = {
            "jobs": [
                {
                    "id": 200,
                    "title": "Accommodation manager",
                    "salary": 126000,
                    "equity": null,
                    "companyHandle": "mejia-scott-ryan",
                    "companyName": "Mejia, Scott and Ryan"
                },
                {
                    "id": 36,
                    "title": "Accountant, chartered certified",
                    "salary": 175000,
                    "equity": "0",
                    "companyHandle": "stone-stewart",
                    "companyName": "Stone-Stewart"
                },
                ]}
          
                JoblyApi.getAllJobs.mockResolvedValue(jobs)

                const { result } = renderHook(() => useJobs())
               
                expect(result.current.jobs).toEqual([]);

                await waitFor(()=>expect(result.current.jobs.length).not.toBe(0))
                
                expect(result.current.jobs).toBe(jobs.jobs)
  ;
  
      });



