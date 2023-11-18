import { useState } from "react";
import { routerPage } from "../../routes";
import "./style.scss";
import { Link } from "react-router-dom";

export const Registration = () => {
  const [regFormData, setRegFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setRegFormData({ ...regFormData, [e.target.name]: e.target.value });
  };

  const registerUser = () => {
    if(!loading && regFormData.email && regFormData.password && regFormData.confirmPassword && regFormData.password === regFormData.confirmPassword){
        console.log(regFormData);
        setLoading(true)
        fetch('https://crudcrud.com/api/38bed9e7674e4379b2b845984f416463/', {
            method:'POST',
            body:regFormData.JSON()
        }).then(data=>{
            if(data){
                setLoading(false)
            }
        })
    }
  }

  return (
    <div className="registration">
      <div className="registrationContainer">
        <div>
          <label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={regFormData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              placeholder="Create a password"
              name="password"
              value={regFormData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={regFormData.confirmPassword}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={registerUser}>{loading? 'Loading...':'Sign Up'}</button>
        <h3>
          Alredy have an account ?<Link to={routerPage.LOGIN}>Login</Link>
        </h3>
      </div>
    </div>
  );
};
