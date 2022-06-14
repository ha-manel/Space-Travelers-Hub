import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets);
  }, []);

  return (
    <div>Rockets</div>
  );
};

export default Rockets;
