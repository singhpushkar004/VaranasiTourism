import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';


const Register = () => {
  return (
    <>
    <BottomNav/>
        <div className="register-page d-flex justify-content-center align-items-center">
        <div className="register-card p-4 shadow rounded">
            <h2 className="text-center mb-4">Create Your Travel Account</h2>
            <form>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="Full Name" />
                <label htmlFor="name">Full Name</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email address" />
                <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
            </div>

            <div className="form-floating mb-4">
                <input type="text" className="form-control" id="location" placeholder="Your City" />
                <label htmlFor="location">City</label>
            </div>

            <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>

            <p className="text-center mt-3 small">Already have an account? <a href="/login">Login here</a></p>
        </div>
        </div>
    <Footer/>   
    </>
  );
};

export default Register;
