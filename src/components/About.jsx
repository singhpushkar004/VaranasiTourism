import React from 'react'
import img1 from "../assets/img/about.avif"
const About = () => {
  return (
    <>
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
                           style={{ objectFit: "cover" }}
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

    </>
  )
}

export default About