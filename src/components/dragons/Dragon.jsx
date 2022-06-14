import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon } from '../../redux/dragons/dragons';
import styles from './Dragon.module.css';

const Dragon = ({ dragon }) => {
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveDragon(dragon.id));
  };

  return (
    <li className={styles.dragonContainer}>
      <div className={styles.dragonImgContainer}>
        <img src={dragon.flickr_images} alt={dragon.name} className={styles.dragonImg} />
      </div>
      <div className={styles.dragonInfo}>
        <h2>{dragon.name}</h2>
        <p>
          {dragon.reserved && (<span className={styles.dragonReservedBadge}>Reserved</span>)}
          {' '}
          Type:
          {dragon.type}
        </p>
        {!dragon.reserved && (<button type="button" onClick={reserve}>Reserve Dragon</button>)}
        {dragon.reserved && (<button type="button" onClick={reserve}>Cancel Reservation</button>)}
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
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Dragon;
