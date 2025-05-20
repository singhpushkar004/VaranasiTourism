import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

const initialBookings = [
  {
    id: 1,
    touristName: 'Amit Kumar',
    bookingFor: 'Hotel Ganges View',
    date: '2025-05-05',
    status: 'Confirmed',
  },
  {
    id: 2,
    touristName: 'Rita Sharma',
    bookingFor: 'Ganga Aarti Tour',
    date: '2025-05-10',
    status: 'Pending',
  },
];

const BookingManagement = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(bookings.filter(b => b.id !== id));
    }
  };

  const handleUpdate = () => {
    setBookings(bookings.map(b => (b.id === selectedBooking.id ? selectedBooking : b)));
    setShowModal(false);
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-header bg-gradient text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Booking Management</h4>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Tourist Name</th>
                <th>Booking For</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.touristName}</td>
                  <td>{booking.bookingFor}</td>
                  <td>{booking.date}</td>
                  <td>
                    <span className={`badge ${booking.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(booking)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(booking.id)}>
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
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Tourist Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedBooking.touristName}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, touristName: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Booking For</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedBooking.bookingFor}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, bookingFor: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={selectedBooking.date}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, date: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={selectedBooking.status}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, status: e.target.value })}
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
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

export default BookingManagement;
