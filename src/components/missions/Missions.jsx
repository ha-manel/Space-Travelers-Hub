import './missions.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, changeStatus } from '../../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions);
  }, []);

  const toggleStatus = (id) => {
    dispatch(changeStatus(id));
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
                {!mission.reserved && <span>NOT A MEMBER</span>}
                {mission.reserved && (
                  <span style={{ backgroundColor: '#18a2b8' }}>Active Member</span>
                )}
              </td>
              <td className="join-mission">
                <button
                  type="button"
                  className="join-btn"
                  onClick={() => toggleStatus(mission.mission_id)}
                  style={{
                    borderColor: mission.reserved ? '#d90429' : '#343a40',
                    color: mission.reserved ? '#d90429' : '#343a40',
                  }}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
