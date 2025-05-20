import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash, FaBan, FaCheck } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';


const initialUsers = [
  { id: 1, name: 'Amit Kumar', email: 'amit@gmail.com', role: 'Tourist', status: 'Active' },
  { id: 2, name: 'Sita Verma', email: 'sita@gmail.com', role: 'Hotel Owner', status: 'Blocked' },
  { id: 3, name: 'Ravi Das', email: 'ravi@gmail.com', role: 'Guide', status: 'Active' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);

  const handleBlock = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Blocked' : 'Active' } : u));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEdit(true);
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setShowView(true);
  };

  const handleEditSave = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? selectedUser : u));
    setShowEdit(false);
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-header bg-gradient text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">User Management</h4>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-info me-2" onClick={() => handleView(user)}><FaEye /></button>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(user)}><FaEdit /></button>
                    <button className="btn btn-sm btn-danger me-2" onClick={() => handleDelete(user.id)}><FaTrash /></button>
                    <button className="btn btn-sm btn-secondary" onClick={() => handleBlock(user.id)}>
                      {user.status === 'Active' ? <FaBan /> : <FaCheck />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      <Modal show={showView} onHide={() => setShowView(false)} centered>
        <Modal.Header closeButton><Modal.Title>User Details</Modal.Title></Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Role:</strong> {selectedUser.role}</p>
              <p><strong>Status:</strong> {selectedUser.status}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowView(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
        <Modal.Header closeButton><Modal.Title>Edit User</Modal.Title></Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control"
                  value={selectedUser.name}
                  onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"
                  value={selectedUser.email}
                  onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })} />
              </div>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <select className="form-select"
                  value={selectedUser.role}
                  onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}>
                  <option>Tourist</option>
                  <option>Guide</option>
                  <option>Hotel Owner</option>
                </select>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEdit(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleEditSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserManagement;
