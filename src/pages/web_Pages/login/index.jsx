import { Link } from "react-router-dom";
import "./style.scss";
import { routerPage } from "../../../routes";
import { useState } from "react";
import { getUsers } from "../../../platform/api/users-api";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]:e.target.value})
  };

  const loginUser = async () => {
    // setLoading(true)
    const result = await getUsers()
    if(result && result.data.length){
      const user = result.data.find(item=>item.email === loginData.email && item.password === loginData.password)
      if(user){
        localStorage.setItem('token', user._id)
        // setLoading(false)
        window.location.reload()
      }
    }
  }

  return (
    <div className="login">
      <div className="loginContainer">
        <div>
          <label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <h4>
          <Link>Forgot password ?</Link>
        </h4>
        <button onClick={loginUser}>{loading? 'Loading...': 'Login'}</button>
        <h3>
          Don't have an account ?
          <Link to={routerPage.REGISTRATION}>Sign Up</Link>
        </h3>
      </div>
    </div>
  );
};
