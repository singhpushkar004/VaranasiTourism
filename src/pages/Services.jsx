import React from 'react'
import BottomNav from '../components/BottomNav'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
    <BottomNav/>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">Services</h1>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                    <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                    <a href="#">Pages</a>
                    </li>
                    <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                    >
                    Services
                    </li>
                </ol>
                </nav>
            </div>
            </div>
        </div>
        </div>

    {/* Service Start */}
    <div className="container-xxl py-5">
        <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
            Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-globe text-primary mb-4" />
                <h5>WorldWide Tours</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-hotel text-primary mb-4" />
                <h5>Hotel Reservation</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Service End */}
<Footer/>
    </>
  )
}

export default Services