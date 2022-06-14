import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../../redux/rockets/rockets';

import './Reserve.css';

const Reserve = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  const toggleReservations = () => {
    dispatch(reserveRocket(id));
  };

  const text = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  return (
    <button
      className={`reserve-btn ${reserved ? 'is-reserved' : 'is-not-reserved'}`}
      onClick={toggleReservations}
      type="button"
    >
      {text}
    </button>
  );
};

Reserve.propTypes = {
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Reserve;
