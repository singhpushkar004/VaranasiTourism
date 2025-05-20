import React, { useState } from "react";

const UserFeedbackComplaints = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    complaint: "",
    rating: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your feedback/complaint has been submitted!");
    // Add submission logic here (API call or form handling)
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4 fs-2">Submit Feedback or Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <select
            className="form-select"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Feedback (Optional)</label>
          <textarea
            className="form-control"
            id="feedback"
            name="feedback"
            rows="3"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="complaint" className="form-label">Complaint (Optional)</label>
          <textarea
            className="form-control"
            id="complaint"
            name="complaint"
            rows="3"
            value={formData.complaint}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default UserFeedbackComplaints;
