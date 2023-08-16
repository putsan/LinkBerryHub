import { useState } from 'react';
import PropTypes from 'prop-types';
import { newLink } from '../../services/xata/instertData';

function AddLinkModal({ onClose, onAdd }) {
  const [url, setLink] = useState('');
  const [name, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBookmark = { url, name };
    await newLink( newBookmark );
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
