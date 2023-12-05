import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState } from "react"

function SearchForm ({searchFunc}) {
  //React controlled Form for search in Joblist and CompanyList
    const [formData, setFormData] = useState("")


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
      }
    const handleSubmit = (e)=>{
      e.preventDefault()
      searchFunc(formData.keyword)
      setFormData("")
    }

    return (
        <Form onSubmit={handleSubmit}>
  <FormGroup>
    <Label
      for="keyWord"
    >
      Search for:
    </Label>
    <Input
      id="keyWord"
      name="keyword"
      placeholder="..."
      type="text"
      onChange={handleChange}
      value={formData.keyword || ""}
    />
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
    )
}

export default SearchForm