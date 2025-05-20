import React from "react";

const touristPlaces = [
  {
    name: "Dashashwamedh Ghat",
    imageUrl: "/images/dashashwamedh.jpg",
    description:
      "One of the most spectacular and sacred ghats of Varanasi, famous for the evening Ganga Aarti.",
    bestTime: "October to March",
  },
  {
    name: "Kashi Vishwanath Temple",
    imageUrl: "/images/kashi-vishwanath.jpg",
    description:
      "Dedicated to Lord Shiva, this temple is one of the twelve Jyotirlingas and holds immense religious significance.",
    bestTime: "All year round",
  },
  {
    name: "Sarnath",
    imageUrl: "/images/sarnath.jpg",
    description:
      "A significant Buddhist site where Lord Buddha gave his first sermon after enlightenment.",
    bestTime: "November to February",
  },
  {
    name: "Assi Ghat",
    imageUrl: "/images/assi-ghat.jpg",
    description:
      "Popular among students and tourists, Assi Ghat is known for its spiritual atmosphere and sunrise views.",
    bestTime: "September to February",
  },
  {
    name: "Ramnagar Fort",
    imageUrl: "/images/ramnagar-fort.jpg",
    description:
      "An 18th-century fort located on the eastern bank of the Ganges, featuring a museum and vintage car display.",
    bestTime: "October to March",
  },
  {
    name: "Manikarnika Ghat",
    imageUrl: "/images/manikarnika-ghat.jpg",
    description:
      "One of the oldest and most sacred cremation grounds in India, representing the cycle of life and death.",
    bestTime: "All year round",
  },
];

const ExplorePlaces = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4 fs-2">Explore Varanasi Tourist Places</h2>
      <div className="row">
        {touristPlaces.map((place, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow rounded">
              <img
                src={place.imageUrl}
                className="card-img-top"
                alt={place.name}
                style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{place.name}</h5>
                <p className="card-text text-muted">{place.description}</p>
                <p className="text-sm text-info">
                  <strong>Best time:</strong> {place.bestTime}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePlaces;
