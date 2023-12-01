import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState, useEffect } from "react";
import { JoblyApi } from "./api";
import { useParams } from "react-router-dom";

function UserForm ({userdata, user}){
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
      console.log(formData)
      setFormData("")
  }

  if (user.token){
    return(
        <Form onSubmit={handleSubmit}>
           <FormGroup>
    <Label
      for="userName"
      hidden
    >
      Username
    </Label>
    <Input
      id="userName"
      name="username"
      placeholder="username"
      type="text"
      value = {formData.username || userdata.user.username}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label
      for="firstName"
      hidden
    >
      First Name
    </Label>
    <Input
      id="firstName"
      name="firstname"
      placeholder="First Name"
      type="text"
      value = {formData.firstname || userdata.user.firstName}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label
      for="lastName"
      hidden
    >
      Last Name
    </Label>
    <Input
      id="lastName"
      name="lastname"
      placeholder="Last Name"
      type="text"
      value = {formData.lastname || userdata.user.lastName}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label
      for="exampleEmail"
      hidden
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Email"
      type="email"
      value = {formData.email || userdata.user.email}
      onChange={handleChange}
    />
  </FormGroup>
  {' '}


  <Button>
    Save Changes
  </Button>
</Form>
        
    )
  }

  else {
    return (
      <h1>Sorry, you must be logged in to see this</h1>
    )
  }
}

export default UserForm