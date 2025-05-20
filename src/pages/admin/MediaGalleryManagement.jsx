import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Modal, Button, Form } from 'react-bootstrap';

const initialMedia = [
  {
    id: 1,
    title: 'Ganga Aarti',
    type: 'image',
    mediaUrl: 'https://via.placeholder.com/300x200?text=Ganga+Aarti',
  },
  {
    id: 2,
    title: 'Varanasi Temple',
    type: 'image',
    mediaUrl: 'https://via.placeholder.com/300x200?text=Varanasi+Temple',
  },
  {
    id: 3,
    title: 'Sunset at Ghats',
    type: 'video',
    mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const MediaGalleryManagement = () => {
  const [mediaItems, setMediaItems] = useState(initialMedia);
  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleEdit = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this media?')) {
      setMediaItems(mediaItems.filter(item => item.id !== id));
    }
  };

  const handleUpdate = () => {
    setMediaItems(mediaItems.map(item => (item.id === selectedMedia.id ? selectedMedia : item)));
    setShowModal(false);
  };

  const handleAddMedia = () => {
    const newMedia = {
      id: mediaItems.length + 1,
      title: 'New Media',
      type: 'image',
      mediaUrl: 'https://via.placeholder.com/300x200?text=New+Media',
    };
    setMediaItems([...mediaItems, newMedia]);
  };

  return (
    <div className="container-fluid p-4">
      <div className="card shadow-sm">
        <div className="card-header bg-gradient text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Media Gallery Management</h4>
          <button className="btn btn-sm btn-primary" onClick={handleAddMedia}>
            Add Media
          </button>
        </div>
        <div className="card-body">
          <div className="row">
            {mediaItems.map((media) => (
              <div className="col-md-3 mb-4" key={media.id}>
                <div className="card">
                  <img
                    src={media.type === 'image' ? media.mediaUrl : 'https://via.placeholder.com/300x200?text=Video'}
                    alt={media.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{media.title}</h5>
                    <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(media)}>
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(media.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit/Add Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>{selectedMedia ? 'Edit Media' : 'Add Media'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Media Title</Form.Label>
              <Form.Control
                type="text"
                value={selectedMedia ? selectedMedia.title : ''}
                onChange={(e) => setSelectedMedia({ ...selectedMedia, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Media Type</Form.Label>
              <Form.Select
                value={selectedMedia ? selectedMedia.type : 'image'}
                onChange={(e) => setSelectedMedia({ ...selectedMedia, type: e.target.value })}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Media URL</Form.Label>
              <Form.Control
                type="text"
                value={selectedMedia ? selectedMedia.mediaUrl : ''}
                onChange={(e) => setSelectedMedia({ ...selectedMedia, mediaUrl: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            {selectedMedia ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MediaGalleryManagement;
