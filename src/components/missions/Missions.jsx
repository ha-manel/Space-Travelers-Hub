import './missions.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions);
  }, []);

  const join = (id) => {
    dispatch(joinMission(id));
  };

  const leave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div id="missions-section">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="status">
                <span>NOT A MEMBER</span>
              </td>
              <td className="join-mission">
                {!mission.reserved && (
                  <button
                    type="button"
                    className="join-btn"
                    onClick={() => join(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
                {mission.reserved && (
                  <button
                    type="button"
                    className="join-btn"
                    onClick={() => leave(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
