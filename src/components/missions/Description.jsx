import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import './description.css';

const Description = ({ closeModal, name, description }) => (
  <div id="modal-window">
    <div id="modal-content">
      <div id="modal-header">
        <h3 className="modal-name">{name}</h3>
        <AiOutlineClose className="close-modal" onClick={() => closeModal(false)} />
      </div>
      <p className="modal-desc">{description}</p>
    </div>
  </div>
);

Description.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Description;
