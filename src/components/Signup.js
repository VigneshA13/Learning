import React from "react";
import "../css/Login.css";
import Image from "../images/learning2.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 left-box1">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Welcome</h2>
              <p>We are happy to have you here.</p>
            </div>
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Username"
                  required
                />
              </div>
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
              <div className="input-group mb-2 mt-2">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Confirm Password"
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
                  Signup
                </button>
              </div>
            </form>

            <div className="row">
              <small>
                Already have an account? <Link to="/">Login</Link>
              </small>
            </div>
          </div>
        </div>

        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column right-box"
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
            Join and Learn together !!!
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
