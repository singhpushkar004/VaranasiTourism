import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'
import img1 from "../assets/img/about.avif"
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";
const About = () => {
  return (
    <>
        <BottomNav/>
        <div class="container-fluid bg-primary py-5 mb-5 hero-header">
            <div class="container py-5">
                <div class="row justify-content-center py-5">
                    <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 class="display-3 text-white animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* About Start */}
        <div className="container-xxl py-5">
            <div className="container">
            <div className="row g-5">
                <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: 400 }}
                >
                <div className="position-relative h-100">
                    <img
                    className="img-fluid position-absolute w-100 h-100"
                    src={img1}
                    alt=""
                    style={{ objectFit: "cover",height:"100px" }}
                    />
                </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                    About Us
                </h6>
                <h1 className="mb-4">
                    Welcome to <span className="text-primary">Tourist</span>
                </h1>
                <p className="mb-4">
                Nestled on the banks of the sacred River Ganges, Varanasi is one of the oldest continuously inhabited cities in the world. Known as the City of Light, Varanasi is a melting pot of spirituality, tradition, and timeless culture. From the mesmerizing Ganga Aarti at Dashashwamedh Ghat to the winding alleys filled with vibrant bazaars, every corner of this ancient city tells a story.
                </p>
                <p className="mb-4">
                Varanasi offers a truly transformative experience—whether you're seeking peace at its historic temples, exploring its rich artistic heritage, or witnessing the cycle of life at its ghats. The city's sacred aura attracts millions of pilgrims and tourists every year who come to experience its unique blend of devotion, diversity, and divine energy.
                </p>
                <div className="row gy-2 gx-4 mb-4">
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Majestic temples and ancient shrines
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Traditional music, dance, and craft
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />5 Star
                        Spiritual river ceremonies and holy dips
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Authentic local cuisine and street food
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        Rich cultural festivals and vibrant street life
                    </p>
                    </div>
                    <div className="col-sm-6">
                    <p className="mb-0">
                        <i className="fa fa-arrow-right text-primary me-2" />
                        24/7 Service
                    </p>
                    </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="">
                    Read More
                </a>
                </div>
            </div>
            </div>
        </div>
        {/* About End */}
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
        <>
 
</>


        <Footer/>
    </>
  )
}

export default About