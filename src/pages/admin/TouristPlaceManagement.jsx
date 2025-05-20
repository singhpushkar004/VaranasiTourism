import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';


const initialPlaces = [
  {
    id: 1,
    name: 'Kashi Vishwanath Temple',
    location: 'Varanasi',
    category: 'Spiritual',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Dashashwamedh Ghat',
    location: 'Ganga River',
    category: 'Cultural',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Sarnath',
    location: 'Varanasi',
    category: 'Historical',
    status: 'Inactive',
  },
];

const TouristPlaceManagement = () => {
  const [places, setPlaces] = useState(initialPlaces);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleEdit = (place) => {
    setSelectedPlace(place);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this place?')) {
      setPlaces(places.filter(p => p.id !== id));
    }
  };

  const handleUpdate = () => {
    setPlaces(
      places.map(p => (p.id === selectedPlace.id ? selectedPlace : p))
    );
    setShowModal(false);
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-header bg-gradient text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Tourist Place Management</h4>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Place Name</th>
                <th>Location</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {places.map((place, idx) => (
                <tr key={place.id}>
                  <td>{idx + 1}</td>
                  <td>{place.name}</td>
                  <td>{place.location}</td>
                  <td><span className="badge bg-primary">{place.category}</span></td>
                  <td>
                    <span className={`badge ${place.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                      {place.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(place)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(place.id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Edit Tourist Place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPlace && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Place Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedPlace.name}
                  onChange={(e) => setSelectedPlace({ ...selectedPlace, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedPlace.location}
                  onChange={(e) => setSelectedPlace({ ...selectedPlace, location: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedPlace.category}
                  onChange={(e) => setSelectedPlace({ ...selectedPlace, category: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={selectedPlace.status}
                  onChange={(e) => setSelectedPlace({ ...selectedPlace, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TouristPlaceManagement;
