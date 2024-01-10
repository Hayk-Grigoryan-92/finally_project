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

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function emailValidate(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  function verification() {
    let isVerification = true;

    const errors = {
      email: "",
      password: "",
    };

    if (!emailValidate(loginData.email)) {
      errors.email = "Incorect Email";
      isVerification = false;
      setLoading(false)
    }
    if (!loginData.email.trim().length) {
      errors.email = "Empty email field";
      isVerification = false;
      setLoading(false)
    }
    if (!loginData.password.trim().length) {
      errors.password = "Empty password field";
      isVerification = false;
      setLoading(false)
    }

    setLoginErrors(errors);
    return isVerification;
  }

  const loginUser = async () => {
    setLoading(true)
    const result = await getUsers();
    if (verification() && result && result.data.length) {
      const user = result.data.find(
        (item) =>
          item.email === loginData.email && item.password === loginData.password
      );
      if (user) {
        setLoading(false)
        localStorage.setItem("token", user._id);
        window.location.reload();
      }
    }
  };

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
              className={`${loginErrors.email ? "errorInput" : ""}`}
            />
            {loginErrors.email ? (
              <p className="errorText">{loginErrors.email}</p>
            ) : null}
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
              className={`${loginErrors.password ? "errorInput" : ""}`}
            />
            {loginErrors.email ? (
              <p className="errorText">{loginErrors.password}</p>
            ) : null}
          </label>
        </div>
        <h4>
          <Link>Forgot password ?</Link>
        </h4>
        <button onClick={loginUser}>{loading ? "Loading..." : "Login"}</button>
        <h3>
          Don't have an account ?
          <Link to={routerPage.REGISTRATION}>Sign Up</Link>
        </h3>
      </div>
    </div>
  );
};
