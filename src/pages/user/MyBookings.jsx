import React from "react";

const bookings = [
  {
    bookingId: "BK2024050101",
    place: "Hotel Ganges View",
    date: "2025-05-05",
    nights: 2,
    guests: 2,
    status: "Confirmed",
    amount: "₹4,800",
  },
  {
    bookingId: "BK2024042814",
    place: "Sarnath Guided Tour",
    date: "2025-04-30",
    nights: 1,
    guests: 1,
    status: "Completed",
    amount: "₹1,200",
  },
  {
    bookingId: "BK2024042711",
    place: "Zostel Varanasi",
    date: "2025-05-10",
    nights: 3,
    guests: 1,
    status: "Pending",
    amount: "₹3,000",
  },
];

const MyBookings = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4 fs-2">My Bookings</h2>
      <div className="row">
        {bookings.map((booking, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold mb-2">{booking.place}</h5>
                <p className="mb-1"><strong>Booking ID:</strong> {booking.bookingId}</p>
                <p className="mb-1"><strong>Date:</strong> {booking.date}</p>
                <p className="mb-1"><strong>Guests:</strong> {booking.guests}</p>
                <p className="mb-1"><strong>Nights:</strong> {booking.nights}</p>
                <p className="mb-1"><strong>Amount:</strong> {booking.amount}</p>
                <p className={`fw-bold mt-2 ${booking.status === "Confirmed" ? "text-success" : booking.status === "Pending" ? "text-warning" : "text-muted"}`}>
                  Status: {booking.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
