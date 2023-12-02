import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState, useEffect } from "react";
import { JoblyApi } from "./api";
import { useParams } from "react-router-dom";
import "./UserForm.css"

function UserForm ({userdata, patchUser}){
  const [formData, setFormData] = useState("")
  const {username} = useParams()
  



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
    patchUser(formData)
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
      value = {formData.firstName || userdata.firstName}
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