import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState, useContext } from "react";
import { JoblyApi } from "../../api";
import { useParams } from "react-router-dom";
import "./UserForm.css"
import userContext from "../../userContext";
import { handleError } from "./HandleSignUpErrors";


function UserForm ({getUser}){
  // React controlled Form for updating UserData
  const [formData, setFormData] = useState("")
  const {username} = useParams()
  const userdata = useContext(userContext)
  
    // Update Userdata via JoblyApi.patchUser func
  const patchUser= async(data)=>{
    const res = await JoblyApi.patchUser(userdata.username, data)
    if (res.user && res.user.username){
      alert (`Saved new Details for ${res.user.username}`)
      getUser(res.user.username)
    }
    else{
      handleError(res.response.data)
    }
  }

  const handleChange = e => {
      const { name, value } = e.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!formData){
      return
    }
    patchUser(formData) // func located in App.js
    setFormData("")
  }

  if (userdata.token && userdata.username == username){
    return(
      <div className ="UserForm">
        <h1>Details for {userdata.username}</h1>
        <Form onSubmit={handleSubmit}>
    
  <FormGroup>
    <Label
      for="firstName"
     
    >
      First Name:
    </Label>
    <Input
      id="firstName"
      name="firstName"
      placeholder="First Name"
      type="text"
      value = {formData.firstName || userdata.firstName }
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label
      for="lastName"
     
    >
      Last Name:
    </Label>
    <Input
      id="lastName"
      name="lastName"
      placeholder="Last Name"
      type="text"
      value = {formData.lastName || userdata.lastName}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label
      for="exampleEmail"
      
    >
      Email:
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Email"
      type="email"
      value = {formData.email || userdata.email}
      onChange={handleChange}
    />
  </FormGroup>
  {' '}


  <Button>
    Save Changes
  </Button>
</Form>
</div>
        
    )
  }

  else {
    return (
      <h1>Sorry, you must be logged in to see this</h1>
    )
  }
}

export default UserForm