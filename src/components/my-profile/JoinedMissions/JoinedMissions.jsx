import React from 'react';
import { useSelector } from 'react-redux';

const JoinedMissions = () => {
  const joinedMissions = useSelector((state) => state.missions
    .filter((mission) => mission.reserved));

  return (
    <div>
      <h2>My Missions</h2>
      <ul className="list">
        {joinedMissions.length > 0
          ? joinedMissions.map((mission) => (
            <li className="list-item" key={mission.mission_id}>
              {mission.mission_name}
            </li>
          ))
          : "You haven't joined any missions yet"}
      </ul>
    </div>
  );
};

export default JoinedMissions;
