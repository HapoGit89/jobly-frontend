import useCompanies from "./useCompanies";
import { renderHook } from "@testing-library/react";

// unit Test
 test("should render the initial companies", () => {
        const { result } = renderHook(useCompanies);
        console.log(result)
        expect(result).toBeDefined()
      });




