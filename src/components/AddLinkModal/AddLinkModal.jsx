import { useState } from 'react';
import { addBookmark } from '../../services/planeetScale/bookmarksService';
import PropTypes from 'prop-types';

function AddLinkModal({ onClose, onAdd }) {
  const [url, setLink] = useState('');
  const [name, setDescription] = useState('');
  const [size, setImage] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBookmark = { url, name, size };
    await addBookmark(newBookmark);
    onAdd(newBookmark);

    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Посилання:
          <input type="text" value={url} onChange={(e) => setLink(e.target.value)} required />
        </label>
        <label>
          Назва:
          <input type="text" value={name} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Розмір:
          <input type="text" value={size} onChange={(e) => setImage(e.target.value)} />
        </label>
        <button type="submit">Додати</button>
        <button type="button" onClick={onClose}>Скасувати</button>
      </form>
    </div>
  );
}

AddLinkModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default AddLinkModal;
