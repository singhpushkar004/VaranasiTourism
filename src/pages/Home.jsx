import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Service from '../components/Service'
import Footer from '../components/Footer'
import destination1 from "../assets/img/destination-1.jpg"
import destination2 from "../assets/img/destination-2.jpg"
import destination3 from "../assets/img/destination-3.jpg"
import destination4 from "../assets/img/destination-4.jpg"
import package1 from "../assets/img/package-1.jpg";
import package2 from "../assets/img/package-2.jpg";
import package3 from "../assets/img/package-3.jpg";
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";
const Home = () => {
  return (
    <>
        <Header/>
        <About/>
        <Service/>
        {/* Destnation start */}
        <div className="container-xxl py-5 destination">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
                Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
            </div>
            <div className="row g-3">
            <div className="col-lg-7 col-md-6">
                <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                    <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src={destination1} alt="" />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        30% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        Thailand
                    </div>
                    </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                    <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src={destination2} alt="" />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        25% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        Malaysia
                    </div>
                    </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                    <a className="position-relative d-block overflow-hidden" href="">
                    <img className="img-fluid" src={destination3} alt="" />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                        35% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                        Australia
                    </div>
                    </a>
                </div>
                </div>
            </div>
            <div
                className="col-lg-5 col-md-6 wow zoomIn"
                data-wow-delay="0.7s"
                style={{ minHeight: 350 }}
            >
                <a className="position-relative d-block h-100 overflow-hidden" href="">
                <img
                    className="img-fluid position-absolute w-100 h-100"
                    src={destination4}
                    alt=""
                    style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                    20% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                    Indonesia
                </div>
                </a>
            </div>
            </div>
        </div>
        </div>

        {/* destnation end */}
        {/* <!-- Package Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                    Packages
                </h6>
                <h1 className="mb-5">Awesome Packages</h1>
                </div>
                <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.1s">
                    <div className="package-item">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={destination1} alt="" />
                    </div>
                    <div className="d-flex border-bottom">
                        <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        Manikarnika
                        </small>
                        <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />3 days
                        </small>
                        <small className="flex-fill text-center py-2">
                        <i className="fa fa-user text-primary me-2" />2 Person
                        </small>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="mb-0">149.00 &#8377;</h3>
                        <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        </div>
                        <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                        amet diam eos
                        </p>
                        <div className="d-flex justify-content-center mb-2">
                        <a
                            href="#"
                            className="btn btn-sm btn-primary px-3 border-end"
                            style={{ borderRadius: "30px 0 0 30px" }}
                        >
                            Read More
                        </a>
                        <a
                            href="#"
                            className="btn btn-sm btn-primary px-3"
                            style={{ borderRadius: "0 30px 30px 0" }}
                        >
                            Book Now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.3s">
                    <div className="package-item">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={destination2} alt="" />
                    </div>
                    <div className="d-flex border-bottom">
                        <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        Ganga River
                        </small>
                        <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />3 days
                        </small>
                        <small className="flex-fill text-center py-2">
                        <i className="fa fa-user text-primary me-2" />2 Person
                        </small>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="mb-0">139.00 &#8377;</h3>
                        <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        </div>
                        <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                        amet diam eos
                        </p>
                        <div className="d-flex justify-content-center mb-2">
                        <a
                            href="#"
                            className="btn btn-sm btn-primary px-3 border-end"
                            style={{ borderRadius: "30px 0 0 30px" }}
                        >
                            Read More
                        </a>
                        <a
                            href="#"
                            className="btn btn-sm btn-primary px-3"
                            style={{ borderRadius: "0 30px 30px 0" }}
                        >
                            Book Now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp h-100" data-wow-delay="0.5s">
                    <div className="package-item">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src={destination3} alt="" />
                    </div>
                    <div className="d-flex border-bottom">
                        <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-map-marker-alt text-primary me-2" />
                        Sarnath
                        </small>
                        <small className="flex-fill text-center border-end py-2">
                        <i className="fa fa-calendar-alt text-primary me-2" />3 days
                        </small>
                        <small className="flex-fill text-center py-2">
                        <i className="fa fa-user text-primary me-2" />2 Person
                        </small>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="mb-0"> 189.00 &#8377;</h3>
                        <div className="mb-3">
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        <small className="fa fa-star text-primary" />
                        </div>
                        <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                        amet diam eos
                        </p>
                        <div className="d-flex justify-content-center mb-2">
                        <a
                            href="#"
                            className="btn btn-sm btn-primary px-3 border-end"
                            style={{ borderRadius: "30px 0 0 30px" }}
                        >
                            Read More
                        </a>
                        <a
                            href="#"
                            className="btn btn-sm btn-primary px-3"
                            style={{ borderRadius: "0 30px 30px 0" }}
                        >
                            Book Now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* <!-- Package end --> */}

        {/* boking start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="booking p-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-6 text-white">
                    <h6 className="text-white text-uppercase">Booking</h6>
                    <h1 className="text-white mb-4">Online Booking</h1>
                    <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                        diam amet diam et eos. Clita erat ipsum et lorem et sit.
                    </p>
                    <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                        lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <a className="btn btn-outline-light py-3 px-5 mt-2" href="">
                        Read More
                    </a>
                    </div>
                    <div className="col-md-6">
                    <h1 className="text-white mb-4">Book A Tour</h1>
                    <form>
                        <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                            <input
                                type="text"
                                className="form-control bg-transparent"
                                id="name"
                                placeholder="Your Name"
                            />
                            <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                            <input
                                type="email"
                                className="form-control bg-transparent"
                                id="email"
                                placeholder="Your Email"
                            />
                            <label htmlFor="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                            className="form-floating date"
                            id="date3"
                            data-target-input="nearest"
                            >
                            <input
                                type="text"
                                className="form-control bg-transparent datetimepicker-input"
                                id="datetime"
                                placeholder="Date & Time"
                                data-target="#date3"
                                data-toggle="datetimepicker"
                            />
                            <label htmlFor="datetime">Date &amp; Time</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                            <select className="form-select bg-transparent" id="select1">
                                <option value={1}>Destination 1</option>
                                <option value={2}>Destination 2</option>
                                <option value={3}>Destination 3</option>
                            </select>
                            <label htmlFor="select1">Destination</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                            <textarea
                                className="form-control bg-transparent"
                                placeholder="Special Request"
                                id="message"
                                style={{ height: 100 }}
                                defaultValue={""}
                            />
                            <label htmlFor="message">Special Request</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button
                            className="btn btn-outline-light w-100 py-3"
                            type="submit"
                            >
                            Book Now
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>

        {/* booking end */}

        {/* Process Start */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                Process
                </h6>
                <h1 className="mb-5">3 Easy Steps</h1>
            </div>
            <div className="row gy-5 gx-4 justify-content-center">
                <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.1s"
                >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                    <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                    >
                    <i className="fa fa-globe fa-3x text-white" />
                    </div>
                    <h5 className="mt-4">Choose A Destination</h5>
                    <hr className="w-25 mx-auto bg-primary mb-1" />
                    <hr className="w-50 mx-auto bg-primary mt-0" />
                    <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
                    eos erat ipsum et lorem et sit sed stet lorem sit
                    </p>
                </div>
                </div>
                <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.3s"
                >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                    <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                    >
                    <i className="fa fa-dollar-sign fa-3x text-white" />
                    </div>
                    <h5 className="mt-4">Pay Online</h5>
                    <hr className="w-25 mx-auto bg-primary mb-1" />
                    <hr className="w-50 mx-auto bg-primary mt-0" />
                    <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
                    eos erat ipsum et lorem et sit sed stet lorem sit
                    </p>
                </div>
                </div>
                <div
                className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                data-wow-delay="0.5s"
                >
                <div className="position-relative border border-primary pt-5 pb-4 px-4">
                    <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                    style={{ width: 100, height: 100 }}
                    >
                    <i className="fa fa-plane fa-3x text-white" />
                    </div>
                    <h5 className="mt-4">Fly Today</h5>
                    <hr className="w-25 mx-auto bg-primary mb-1" />
                    <hr className="w-50 mx-auto bg-primary mt-0" />
                    <p className="mb-0">
                    Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
                    eos erat ipsum et lorem et sit sed stet lorem sit
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Process Start */}

    
        {/* Team Start */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">
                Travel Guide
                </h6>
                <h1 className="mb-5">Meet Our Guide</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src={team1} alt="" />
                    </div>
                    <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-19px" }}
                    >
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram" />
                    </a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src={team2} alt="" />
                    </div>
                    <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-19px" }}
                    >
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram" />
                    </a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src={team3} alt="" />
                    </div>
                    <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-19px" }}
                    >
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram" />
                    </a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item">
                    <div className="overflow-hidden">
                    <img className="img-fluid" src={team4} alt="" />
                    </div>
                    <div
                    className="position-relative d-flex justify-content-center"
                    style={{ marginTop: "-19px" }}
                    >
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square mx-1" href="">
                        <i className="fab fa-instagram" />
                    </a>
                    </div>
                    <div className="text-center p-4">
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Team End */}

    <Footer/>
    </>
  )
}

export default Home