import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../../redux/rockets/rockets';

import './Reserve.css';

const Reserve = (props) => {
  const { id, reserved } = props;
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(id));
  };

  const text = reserved ? 'Cancel Reservation' : 'Reserve Rocket';

  return (
    <button
      className="reserve-btn"
      onClick={reserve}
      type="button"
      style={{
        backgroundColor: reserved ? '#a3a3a310' : '#2897ff',
        border: reserved ? '1px solid #b5b8bb' : 'none',
        color: reserved ? '#666' : '#fff',
      }}
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
