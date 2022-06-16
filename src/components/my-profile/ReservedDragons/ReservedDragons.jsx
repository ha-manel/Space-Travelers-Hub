import { useSelector } from 'react-redux';

const ReservedDragons = () => {
  const dragonReservations = useSelector((state) => state.dragons
    .filter((dragon) => dragon.reserved));

  return (
    <div>
      <h2>My Dragons</h2>
      <ul className="list">
        {dragonReservations.length > 0 ? dragonReservations.map((dragon) => (
          <li className="list-item" key={dragon.id}>{dragon.name}</li>
        )) : "You don't have dragon reservations yet."}
      </ul>
    </div>
  );
};

export default ReservedDragons;
