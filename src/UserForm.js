import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState } from "react";

function UserForm (){
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
      value = {formData.username || ""}
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
      value = {formData.firstname || ""}
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
      value = {formData.lastname || ""}
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
      value = {formData.email || ""}
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

export default UserForm