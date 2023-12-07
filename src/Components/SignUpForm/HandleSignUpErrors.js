export const handleError = (res)=>{
    if (`${res}`.includes(`Duplicate`))
    {
      alert (`Sorry this username is already taken`)
    }
    else if (`${res}`.includes("instance.password does not meet minimum length"))
    {
      alert (`Your password has to be at least 6 characters long`)
    }
    else if (`${res}`.includes(`email`))
    {
      alert (`Please check the length (minimum 6) and format of your email`)
    }
    else if (`${res}`.includes(`firstName`))
    {
      alert (`Please enter your first name`)
    }
    else if (`${res}`.includes(`lastName`))
    {
      alert (`Please enter your last name`)
    }
}
