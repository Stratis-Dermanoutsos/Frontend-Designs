import React from 'react';
import Input from './components/Input';
import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="container py-5">
      <div className="col-12 py-5">
        <form className="col-md-6 offset-3 shadow-lg" method="post">
          <h3 className="py-3 text-center text-white">Login Form</h3>
          <div className="form-group bg-white py-4">
            <div className="col-10 offset-1">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                </div>
                <a className="text-decoration-none mb-4" href="#">Forgot password?</a>
              </div>
              <SubmitButton />
              <div className="mb-4 text-center">
                Not a member? <a className="text-decoration-none" href="#">Sign up now</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
