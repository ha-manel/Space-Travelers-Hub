import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragons';
import Dragon from './Dragon';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons);
  }, []);

  return (
    <ul>
      {dragons && dragons.map((dragon) => <Dragon dragon={dragon} key={dragon.id} />)}
    </ul>
  );
};

export default Dragons;
