import React, { useRef } from 'react';
import './stylesheets/App.css';
import logo from './images/logo.png';

function App() {
  const passwordInput = useRef();
  const passwordVisible = useRef(false);

  function handlePasswordVisibility() {
    const input = passwordInput.current;
    const isVisible = passwordVisible.current;

    const newType = isVisible.checked ? "text" : "password";

    input.type = newType;
  }

  return (
    <div>
      <img src={logo} alt="logo" />
      <form>
        <input type="email" placeholder="email"/>
        <label id="password">
          <input ref={passwordInput} type="password" placeholder="password"/>
          <input ref={passwordVisible} type="checkbox" id="showPass" onChange={handlePasswordVisibility} />
        </label>
        <label id="rememberme">
          <input type="checkbox" />
          <span>Remember me</span>
        </label>
        <input type="submit" value="Login" />
        <div id="forgotpassword">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}

export default App;
