import SpacesxService from '../../services/SpacexService';

// Action
const LOAD_MISSIONS = 'spacehub/missions/LOAD_MISSIONS';
const JOIN_MISSION = 'spacehub/missions/JOIN_MISSION';

// Action creators
const joinMission = (id) => ({ type: JOIN_MISSION, payload: id });

// Reducer
export default function missions(state = [], action = {}) {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return [...state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      })];
    default:
      return state;
  }
}

// Side Effects
const fetchMissions = async (dispatch, getState) => {
  const currentMissions = getState().missions;

  if (currentMissions.length === 0) {
    const { data } = await SpacesxService.getMissions();
    const missions = data.map((mission) => (
      {
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        reserved: false,
      }
    ));
    dispatch({ type: LOAD_MISSIONS, payload: missions });
  }
};

export { fetchMissions, joinMission };
