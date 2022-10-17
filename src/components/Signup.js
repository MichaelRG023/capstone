import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

function Signup(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });
      const [errors, setErrors] = useState([]);
      // const history = useHistory()
      const navigate = useNavigate();
    
      const { username, password} = formData;
    
      function onSubmit(e) {
        e.preventDefault();
        const user = {
          username,
          password,
        };
    
        fetch(`/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }).then((res) => {
          if (res.ok) {
            res.json().then((user) => {
             
              navigate(`/login`);
            });
          } else {
            // res.json().then(json => setErrors(Object.entries(json.errors)))
            res.json().then((json) => setErrors(Object.entries(json.errors)));
          }
        });
      }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      return (
        <>
          <div className="signup-container" id="container">
            <div className="login-box">
                <h1>Sign Up</h1>
    
              <form className="form-data" onSubmit={onSubmit}>
                <label className="signup-username" >Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="username"
                />
    
                <label className="signup-password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="*****"
                />
       
            
                <button type="submit" value="Log in!" className="signup-button">
                  Sign Up!
                </button>
              </form>
              {errors
                ? errors.map((error) => (
                    <div key={error.id} className="login-errors">
                      <h4>
                        {" "}
                        {error[0]}
                        {" "}
                        {error[1]}{" "}
                      </h4>
                    </div>
                  ))
                : null}
            </div>
          </div>

                </>
      )
}

export default Signup;