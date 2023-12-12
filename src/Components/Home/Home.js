import "./Home.css"
import { useContext } from "react"
import userContext from "../../userContext"

function Home (){
    // Welcome Page which displays Hello message 
    // when logged in and Login/Signin Prompt when logged out
    const user = useContext(userContext)

    if (user && user.token){
    return (
    <div className="WelcomeMessage"> 
         <h1>Welcome {user.username}, you can find jobs and new opportunities here, have fun!</h1>
    </div>
    )}

    else {
        return (
            <div className="WelcomeMessage">
                <h1>Welcome to Jobly, please register or login!</h1>
            </div>
        )
    }
}

export default Home