import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../../redux/dragons/dragons';
import styles from './Dragon.module.css';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const toggleReservationStatus = () => {
    dispatch(toggleReservation(dragon.id));
  };

  return (
    <li className={styles.dragonContainer}>
      <div className={styles.dragonImgContainer}>
        <img src={dragon.flickr_images} alt={dragon.name} className={styles.dragonImg} />
      </div>
      <div className={styles.dragonInfo}>
        <h3>{dragon.name}</h3>
        <p>
          {dragon.reserved && (<span className={styles.dragonReservedBadge}>Reserved</span>)}
          {' '}
          <strong>Type:</strong>
          {' '}
          {dragon.type}
        </p>
        <button
          type="button"
          onClick={toggleReservationStatus}
          className={dragon.reserved ? `${styles.reservedBtn} ${styles.btn}` : `${styles.regularBtn} ${styles.btn}`}
        >
          {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
        </button>
      </div>
    </li>
  );
};

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Dragon;
