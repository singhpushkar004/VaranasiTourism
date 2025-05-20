import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

const initialListings = [
  {
    id: 1,
    name: 'Hotel Ganges View',
    type: 'Hotel',
    location: 'Assi Ghat',
    rating: 4.5,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Banaras Bites',
    type: 'Restaurant',
    location: 'Godowlia',
    rating: 4.2,
    status: 'Active',
  },
];

const HotelRestaurantManagement = () => {
  const [listings, setListings] = useState(initialListings);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      setListings(listings.filter(item => item.id !== id));
    }
  };

  const handleUpdate = () => {
    setListings(
      listings.map(item => (item.id === selectedItem.id ? selectedItem : item))
    );
    setShowModal(false);
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-header bg-gradient text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Hotel & Restaurant Listings</h4>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item, idx) => (
                <tr key={item.id}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <span className={`badge ${item.type === 'Hotel' ? 'bg-info' : 'bg-warning'}`}>
                      {item.type}
                    </span>
                  </td>
                  <td>{item.location}</td>
                  <td>{item.rating} ⭐</td>
                  <td>
                    <span className={`badge ${item.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(item)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)}>
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
          <Modal.Title>Edit Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem.name}
                  onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={selectedItem.type}
                  onChange={(e) => setSelectedItem({ ...selectedItem, type: e.target.value })}
                >
                  <option value="Hotel">Hotel</option>
                  <option value="Restaurant">Restaurant</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedItem.location}
                  onChange={(e) => setSelectedItem({ ...selectedItem, location: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  type="number"
                  step="0.1"
                  min="1"
                  max="5"
                  value={selectedItem.rating}
                  onChange={(e) => setSelectedItem({ ...selectedItem, rating: parseFloat(e.target.value) })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={selectedItem.status}
                  onChange={(e) => setSelectedItem({ ...selectedItem, status: e.target.value })}
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

export default HotelRestaurantManagement;
