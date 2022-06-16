import './missions.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, changeStatus } from '../../redux/missions/missions';
import Description from './Description';

const Missions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalMission, setModalMission] = useState({
    name: '',
    description: '',
  });
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions);
  }, []);

  const toggleStatus = (id) => {
    dispatch(changeStatus(id));
  };

  const showModal = (name, description) => {
    setOpenModal(true);
    setModalMission({
      name,
      description,
    });
  };

  return (
    <div id="missions-section" style={{ overflow: openModal ? 'hidden' : 'scroll' }}>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th className="desc-header">Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name">
                {mission.mission_name}
                <button
                  type="button"
                  className="see-more"
                  onClick={() => showModal(mission.mission_name, mission.description)}
                >
                  See more
                </button>
              </td>

              <td className="mission-desc">{mission.description}</td>

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
      {openModal && (
        <Description
          closeModal={setOpenModal}
          name={modalMission.name}
          description={modalMission.description}
        />
      )}
    </div>
  );
};

export default Missions;
