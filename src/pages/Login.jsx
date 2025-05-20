import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';


const Login = () => {
  return (
    <>
    <BottomNav/>
        <div className="login-page d-flex justify-content-center align-items-center">
        <div className="login-card p-4 shadow rounded">
            <h2 className="text-center mb-4">Welcome Back</h2>
            <form>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email" />
                <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-4">
                <input type="password" className="form-control" id="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>

            <p className="text-center mt-3 small">
            Don’t have an account? <a href="/register">Register here</a>
            </p>
        </div>
        </div>
    <Footer/>
    </>
  );
};

export default Login;
