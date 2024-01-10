import { useState } from "react";
import { routerPage } from "../../../routes";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../../platform/api/users-api";

export const Registration = () => {
  const [regFormData, setRegFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorFormData, setErrorFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setRegFormData({ ...regFormData, [e.target.name]: e.target.value });
  }

  function emailValidate(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validate() {
    let isValidate = true;

    const errors = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!emailValidate(regFormData.email)) {
      errors.email = "Incorect Email";
      isValidate = false;
      setLoading(false);
    }

    if (!regFormData.email.trim().length) {
      errors.email = "Empty email field";
      isValidate = false;
      setLoading(false);
    }

    if (!regFormData.password.trim().length) {
      errors.password = "Empty password field";
      isValidate = false;
      setLoading(false);
    }
    if (!regFormData.confirmPassword.trim().length) {
      errors.confirmPassword = "Empty confirm password field";
      isValidate = false;
      setLoading(false);
    }
    if (
      regFormData.password.trim().length !==
      regFormData.confirmPassword.trim().length) {
      errors.password = "Password mismatch";
      errors.confirmPassword = "Password mismatch";
      isValidate = false;
      setLoading(false);
    }

    setErrorFormData(errors);
    return isValidate;
  }

  const navigate = useNavigate();

  const registerUser = async () => {
    setLoading(true)
    if (
      validate() &&
      !loading &&
      regFormData.email &&
      regFormData.password &&
      regFormData.confirmPassword &&
      regFormData.password === regFormData.confirmPassword
    ) {
      const result = await createUser(regFormData);
      if (result) {
        setRegFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        setLoading(false);
      }
      navigate(routerPage.LOGIN);
    }
  };

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
              className={`${errorFormData.email ? "errorInput" : ""}`}
            />
            {errorFormData.email ? (
              <p className="errorText">{errorFormData.email}</p>
            ) : null}
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
              className={`${errorFormData.password ? "errorInput" : ""}`}
            />
            {errorFormData.password ? (
              <p className="errorText">{errorFormData.password}</p>
            ) : null}
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
              className={`${errorFormData.confirmPassword ? "errorInput" : ""}`}
            />
            {errorFormData.confirmPassword ? (
              <p className="errorText">{errorFormData.confirmPassword}</p>
            ) : null}
          </label>
        </div>
        <button onClick={registerUser}>
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <h3>
          Alredy have an account ?<Link to={routerPage.LOGIN}>Login</Link>
        </h3>
      </div>
    </div>
  );
};
