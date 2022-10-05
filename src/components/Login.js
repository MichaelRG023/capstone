import {  useState } from "react";

import './Login.css'

function Login({updateUser}){
    
    const [userToLogin, updateUserToLoginInfo] = useState({
            username: "",
            password:""
        } );


    
    
   

    //if(!loggedInUser) return <Login setLoggedInUser={setLoggedInUser}/>
    const handleLoginSubmit=(synthEvent)=>{
    synthEvent.preventDefault()
            
    fetch("/login",
    {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(userToLogin)
    }
    )
    .then(r=>r.json())
    .then(pleaseWorkForUser=>{
    console.log(pleaseWorkForUser)
    updateUser(pleaseWorkForUser)
    })

    }


    const handleChangeForUserToLogin=(synthEvent)=>{
    
    updateUserToLoginInfo({...userToLogin,[synthEvent.target.name]:synthEvent.target.value})
    }

   




    return(
        <>

        <div className="Login">
         <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Kicks r Us</h3>
                    <span className="loginDesc">Website for the latest sneakers</span>
                <div className="loginRight">
            <div className="loginBox">
        
                <h1>Login  to Sneakers-R-Us</h1>
                    <form onSubmit={handleLoginSubmit}> 
                    <input type="username"
                    onChange={handleChangeForUserToLogin}
                    name="username"/>
    
                    <input type="password"
                    onChange={handleChangeForUserToLogin} 
                    name='password'/>
  
                 <button type="submit" value="Log in!" className="signup-button">
                    Log In
                    </button>
                        </form>
                        <div id="alternativeLogin">
                        <label>Or Sign In with</label>
                        </div>
                    </div>
                 </div>
            </div>
         </div>
    </div>
    </>
    )
}



export default Login;