import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState,useContext } from "react";
import { JoblyApi } from "../../api";
import {useNavigate} from "react-router-dom"
import "./SignUpForm.css"
import userContext from "../../userContext";
import { handleError } from "./HandleSignUpErrors";

function SignUpForm ({logIn}){
  // React controlled Form for User Login
  const [formData, setFormData] = useState("")
  const navigate = useNavigate()
  const user = useContext(userContext)

  // Register with JoblyAPI and Login in app via login()
  const Register = async()=> {
    let res = await JoblyApi.SignUp(formData)
    if (res && res.token){
      alert(`Registered as ${formData.username}`)
      logIn({username: formData.username, token: res.token})
      navigate("/")
    }
    else {
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
      Register()
      
  }
    if(!user.token){
    return(
      <div className="SignUpForm">
        <h1>Sign Up For Jobly:</h1>
        <Form  onSubmit={handleSubmit}>
           <FormGroup>
    <Label for="userName">
      Username:
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
    <Label for="firstName" >
      First Name:
    </Label>
    <Input
    className="Input"
      id="firstName"
      name="firstName"
      placeholder="First Name"
      type="text"
      value={formData.firstName || ""}
      onChange={handleChange}
    />
  </FormGroup>
  <FormGroup>
    <Label for="lastName">
      Last Name:
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
    <Label for="exampleEmail">
      Email:
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
    <Label for="examplePassword" >
      Password:
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
</div>
        
    )}

    else {
      return(
        <div>
          <h1>Please log out if you want to register a new user</h1>
        </div>
      )
    }
}

export default SignUpForm