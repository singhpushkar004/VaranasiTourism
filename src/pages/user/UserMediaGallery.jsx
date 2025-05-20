import React from "react";

const mediaItems = [
  {
    type: "image",
    url: "/images/ganga-aarti.jpg",
    title: "Ganga Aarti at Dashashwamedh Ghat",
  },
  {
    type: "image",
    url: "/images/assi-ghat-sunrise.jpg",
    title: "Sunrise at Assi Ghat",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/1rSx2BWcKdw",
    title: "Kashi Vishwanath Temple Tour",
  },
  {
    type: "image",
    url: "/images/sarnath-park.jpg",
    title: "Sarnath Buddhist Site",
  },
  {
    type: "video",
    url: "https://www.youtube.com/embed/3TEl1qEunDk",
    title: "Virtual Walk on Varanasi Ghats",
  },
];

const UserMediaGallery = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold mb-4 fs-2">Explore Varanasi Media Gallery</h2>
      <div className="row">
        {mediaItems.map((item, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              {item.type === "image" ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              ) : (
                <div className="ratio ratio-16x9">
                  <iframe
                    src={item.url}
                    title={item.title}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title text-center">{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMediaGallery;
