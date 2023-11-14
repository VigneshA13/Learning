import React from "react";
import "../css/Login.css";
import Image from "../images/learning.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#103cbe" }}>
          <div className="featured-image mb-3">
            <img src={Image} className="img-fluid" style={{ width: "250px" }} />
          </div>
          <p
            className="text-white fs-2"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: 600,
            }}>
            Online Learning
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{
              width: "17rem",
              fontFamily: "'Courier New', Courier, monospace",
            }}>
            Let's learn together !!!
          </small>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Hello,Again</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                  />
                  <label
                    htmlFor="formCheck"
                    className="form-check-label text-secondary">
                    <small>Remember Me</small>
                  </label>
                </div>
                <div className="forgot">
                  <small>
                    <a href="#">Forgot Password?</a>
                  </small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
            </form>

            <div className="row">
              <small>
                Don't have an account?<Link to="/signup">Sign Up</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
