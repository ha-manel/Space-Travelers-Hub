import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';

import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets);
  }, []);

  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets">
      <ul className="rocket-list">
        {rockets && rockets.map((rocket) => (
          <li className="rocket" key={rocket.id}>
            <img src={rocket.flickr_images} alt={rocket.name} className="rocket-img" />
            <div className="rocket-info">
              <span className="rocket-name">{rocket.name}</span>
              <span className="rocket-description">{rocket.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
