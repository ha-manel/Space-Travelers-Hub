import PropTypes from 'prop-types';
import styles from './Dragon.module.css';

const Dragon = ({ dragon }) => (
  <li className={styles.dragonContainer}>
    <div className={styles.dragonImgContainer}>
      <img src={dragon.flickr_images} alt={dragon.name} className={styles.dragonImg} />
    </div>
    <div className={styles.dragonInfo}>
      <h2>{dragon.name}</h2>
      <p>
        Type:
        {dragon.type}
      </p>
      <button type="button">Reserve Dragon</button>
    </div>
  </li>
);

Dragon.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
  }).isRequired,
};

export default Dragon;
