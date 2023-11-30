import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState } from "react";
import { JoblyApi } from "./api";
import {useNavigate} from "react-router-dom"

function SignUpForm ({logIn}){
  const [formData, setFormData] = useState("")
  const navigate = useNavigate()
  const Register = async()=> {
    let res = await JoblyApi.SignUp(formData)
    console.log(res)
    if (res && res.token){
      alert(`Registered as ${formData.username}`)
      logIn({username: formData.username, token: res.token})
      navigate("/")
    }
    else {
      console.log(res)
      alert (`something went wrong`)
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
      Register()
      
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
      value={formData.username || ""}
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
      name="firstName"
      placeholder="First Name"
      type="text"
      value={formData.firstName || ""}
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
      name="lastName"
      placeholder="Last Name"
      type="text"
      value={formData.lastName || ""}
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
      value={formData.email || ""}
      onChange={handleChange}
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      hidden
    >
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Password"
      type="password"
      value={formData.password || ""}
      onChange={handleChange}
    />
  </FormGroup>
  {' '}
  <Button>
    Submit
  </Button>
</Form>
        
    )
}

export default SignUpForm