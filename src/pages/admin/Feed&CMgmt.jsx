import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaEdit, FaTrash, FaReply } from 'react-icons/fa';

const initialFeedback = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    type: 'Feedback',
    message: 'Great experience! The Ganga Aarti was beautiful.',
    status: 'Resolved',
    response: 'Thank you for your feedback! We are glad you enjoyed the experience.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    type: 'Complaint',
    message: 'The hotel I stayed in was not clean.',
    status: 'Unresolved',
    response: '',
  },
];

const FeedbackAndComplaintsManagement = () => {
  const [feedbackList, setFeedbackList] = useState(initialFeedback);
  const [showModal, setShowModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [response, setResponse] = useState('');

  const handleEdit = (feedback) => {
    setSelectedFeedback(feedback);
    setResponse(feedback.response);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback/complaint?')) {
      setFeedbackList(feedbackList.filter(item => item.id !== id));
    }
  };

  const handleUpdate = () => {
    const updatedFeedback = { ...selectedFeedback, response: response, status: 'Resolved' };
    setFeedbackList(feedbackList.map(item => (item.id === selectedFeedback.id ? updatedFeedback : item)));
    setShowModal(false);
    setResponse('');
  };

  const handleAddResponse = () => {
    const updatedFeedback = { ...selectedFeedback, response: response, status: 'Resolved' };
    setFeedbackList(feedbackList.map(item => (item.id === selectedFeedback.id ? updatedFeedback : item)));
    setShowModal(false);
    setResponse('');
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-header bg-gradient text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Feedback & Complaints Management</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {feedbackList.map((feedback) => (
                  <tr key={feedback.id}>
                    <td>{feedback.id}</td>
                    <td>{feedback.name}</td>
                    <td>{feedback.email}</td>
                    <td>{feedback.type}</td>
                    <td>{feedback.message}</td>
                    <td>{feedback.status}</td>
                    <td>
                      <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(feedback)}>
                        <FaEdit />
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(feedback.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Editing and Responding */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>{selectedFeedback ? 'Respond to Feedback/Complaint' : 'Add Response'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Response</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your response here..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddResponse}>
            Respond
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FeedbackAndComplaintsManagement;
