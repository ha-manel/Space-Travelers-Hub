import React from 'react';
import { useSelector } from 'react-redux';

const ReservedRockets = () => {
  const reservedRockets = useSelector((state) => (
    state.rockets.filter((rocket) => rocket.reserved)
  ));

  return (
    <div>
      <h2>My Rockets</h2>
      <ul className="list">
        {reservedRockets.length > 0
          ? reservedRockets.map((rocket) => (
            <li className="list-item" key={rocket.id}>
              {rocket.name}
            </li>
          ))
          : 'You have no reserved rockets'}
      </ul>
    </div>
  );
};

export default ReservedRockets;
