import registerImg from "../../assets/register.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { GoDotFill, GoCheck } from "react-icons/go";
import { useState, useEffect } from "react";

function Register({ onLogin }) {
  //STATE
  const [showPassword, setShowPassword] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");

  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

  //Functions
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowIndicator = () => {
    setShowIndicator(true);
  };

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  //useEffect
  useEffect(() => {
    //check for lower and uppercase
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else {
      setPassLetter(false);
    }

    //check for numbers
    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else {
      setPassNumber(false);
    }

    //check for special characters
    if (pass.match(/([!,$,%,@,#,^,*,?,_,~])/)) {
      setPassChar(true);
    } else {
      setPassChar(false);
    }

    //check password length
    if (pass.length >= 8) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true);
    } else {
      setPassComplete(false);
    }
  }, [pass, passLength, passNumber, passChar, passLetter]);

  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />

          {/*PASSWORD FIELD */}
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              className="--width-100"
              placeholder="Password"
              onFocus={handleShowIndicator}
              value={pass}
              onChange={handlePasswordChange}
            />
            <span className="icon" onClick={handleTogglePassword}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          {/*PASSWORD FIELD */}

          <button
            disabled={!passComplete}
            className={
              passComplete
                ? "--btn --btn-primary --btn-block"
                : "--btn --btn-primary --btn-block btn-disabled"
            }
            onClick={onLogin}
          >
            Register
          </button>
          <span className="--text-sm --block">
            Have an account?
            <a href="#" onClick={onLogin}>
              {" "}
              Login
            </a>
          </span>

          {/*PASSWORD STRENGTH INDICATOR */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? <GoCheck /> : <GoDotFill />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <GoCheck /> : <GoDotFill />}
                  &nbsp; Numbers (0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <GoCheck /> : <GoDotFill />}
                  &nbsp; Special Characters (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? <GoCheck /> : <GoDotFill />}
                  &nbsp; At least 8 characters
                </span>
              </li>
            </ul>
          </div>
          {/*PASSWORD STRENGTH INDICATOR */}
        </form>
      </div>
      <div className="img-container">
        <img src={registerImg} alt="register" />
      </div>
    </div>
  );
}

export default Register;
