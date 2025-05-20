import React from "react";

const hotels = [
  {
    name: "Hotel Ganges View",
    location: "Dashashwamedh Ghat, Varanasi",
    imageUrl: "/images/hotel1.jpg",
    pricePerNight: "₹2,400",
    rating: 4.5,
  },
  {
    name: "Varanasi Heritage Inn",
    location: "Assi Ghat, Varanasi",
    imageUrl: "/images/hotel2.jpg",
    pricePerNight: "₹3,000",
    rating: 4.2,
  },
  {
    name: "Zostel Varanasi",
    location: "Near Godowlia, Varanasi",
    imageUrl: "/images/hotel3.jpg",
    pricePerNight: "₹1,500",
    rating: 4.0,
  },
];

const HotelListing = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4 fs-2">Hotel & Restaurant Listings</h2>
      <div className="row">
        {hotels.map((hotel, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={hotel.imageUrl}
                alt={hotel.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{hotel.name}</h5>
                <p className="card-text mb-1"><strong>Location:</strong> {hotel.location}</p>
                <p className="card-text mb-1"><strong>Price/Night:</strong> {hotel.pricePerNight}</p>
                <p className="card-text mb-2"><strong>Rating:</strong> ⭐ {hotel.rating}</p>
                <button className="btn btn-outline-primary w-100">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelListing;
