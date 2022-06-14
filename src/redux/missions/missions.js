import SpacesxService from '../../services/SpacexService';

// Action
const LOAD_MISSIONS = 'spacehub/missions/LOAD_MISSIONS';

// Reducer
export default function missions(state = [], action = {}) {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.payload;
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
      }
    ));
    dispatch({ type: LOAD_MISSIONS, payload: missions });
  }
};

export { fetchMissions };
