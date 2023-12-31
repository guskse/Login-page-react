import loginImg from "../../assets/login.svg";

function Login({ onRegister, onReset }) {
  return (
    <div className="main-container --flex-center">
      <div className="img-container">
        <img src={loginImg} alt="login" />
      </div>
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Login</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <h2 className="--color-danger">Password</h2>
          <input
            type="password"
            className="--width-100"
            placeholder="Password"
          />
          <button className="--btn --btn-primary --btn-block">Login</button>
          <a href="#" className="--text-sm" onClick={onReset}>
            Forgot password?
          </a>
          <span className="--text-sm --block">
            Don't have an account?{" "}
            <a href="#" onClick={onRegister}>
              Register
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
