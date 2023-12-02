import "./Home.css"

function Home ({user}){

    if (user.token)
    return (
    <div className="WelcomeMessage"> 
         <h1>Welcome {user.username}, you can find jobs and new opportunities here, have fun!</h1>
    </div>

       

    )

    else {
        return (
            <div className="WelcomeMessage">
                <h1>Welcome to Jobly, please register or login!</h1>
            </div>

        )
    }
}

export default Home