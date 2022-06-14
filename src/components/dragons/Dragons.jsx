import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDragons } from '../../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDragons);
  }, []);

  return (
    <div>Dragons</div>
  );
};

export default Dragons;
