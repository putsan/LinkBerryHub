import { useState } from 'react';
import AddLinkModal from '../AddLinkModal/AddLinkModal';
import PropTypes from 'prop-types';

function AddButton({ onAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Додати посилання</button>
      {isModalOpen && <AddLinkModal onClose={handleCloseModal} onAdd={onAdd}/>}
    </div>
  );
}

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddButton;
