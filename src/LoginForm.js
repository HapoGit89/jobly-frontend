import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useState } from "react";
import { JoblyApi } from "./api";
import { useNavigate } from "react-router-dom";

function LoginForm ({logIn}){
    const [formData, setFormData] = useState("")
    const navigate = useNavigate()

    const Login = async()=>{
      let res = await JoblyApi.Login(formData)
      if (res && res.token){
        alert(`Logged in as ${formData.username}`)
        logIn({username: formData.username, token: res.token})
        navigate("/")
      }
      else {
        console.log(res)
        alert (`Sorry, wrong credentials`)
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
        Login()
        setFormData("")
    }

    return(
        <Form onSubmit={handleSubmit}>
  <FormGroup>
    <Label
      for="Username"
      
    >
      Username
    </Label>
    <Input
      id="userName"
      name="username"
      placeholder="Username"
      type="text"
      value={formData.username || ""}
      onChange={handleChange}
    />
  </FormGroup>
  {' '}
  <FormGroup>
    <Label
      for="examplePassword"
      
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

export default LoginForm