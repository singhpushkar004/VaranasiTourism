import React from "react";
import Card from "../../components/Card"; // Optional: for custom styles

const Card = ({ image, title, description, bestTime }) => {
  return (
    <div className="custom-card card shadow-sm mb-4">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
        <p className="text-sm text-primary">
          <strong>Best time:</strong> {bestTime}
        </p>
      </div>
    </div>
  );
};

export default Card;
