import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';
import BottomNav from './BottomNav';

const Header = () => {
  return (
        <>
        <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2" />
                123 Street, Lucknow UP
                </small>
                <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2" />
                +91 7830198385
                </small>
                <small className="text-light">
                <i className="fa fa-envelope-open me-2" />
                pushkar.softpro@gmail.com
                </small>
            </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
                >
                <i className="fab fa-twitter fw-normal" />
                </Link>
                <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
                >
                <i className="fab fa-facebook-f fw-normal" />
                </Link>
                <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
                >
                <i className="fab fa-linkedin-in fw-normal" />
                </Link>
                <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                to=""
                >
                <i className="fab fa-instagram fw-normal" />
                </Link>
                <Link
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                to=""
                >
                <i className="fab fa-youtube fw-normal" />
                </Link>
            </div>
            </div>
        </div>
        </div>
        {/* nav bar */}

        <div className="container-fluid position-relative p-0">
       <BottomNav/>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
            <div className="row justify-content-center py-5">
                <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white mb-3 animated slideInDown">
                    Enjoy Your Vacation With Us
                </h1>
                <p className="fs-4 text-white mb-4 animated slideInDown">
                Varanasi, the eternal city on the banks of the Ganges, offers a profound journey through India's spiritual soul, ancient traditions, and timeless culture.
                </p>
                <div className="position-relative w-75 mx-auto animated slideInDown">
                    <input
                    className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Eg: Thailand"
                    />
                    <button
                    type="button"
                    className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                    style={{ marginTop: 7 }}
                    >
                    Search
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
  );
};

export default Header;
