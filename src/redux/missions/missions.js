import axios from 'axios';

// Actions
const LOAD_MISSIONS = 'spacehub/missions/LOAD_MISSIONS';

// Reducer
export default function missions(state = [], action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

// Side Effects
const fetchMissions = async (dispatch) => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/missions');
  const missions = data.map((mission) => (
    {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    }
  ));
  dispatch({ type: LOAD_MISSIONS, payload: missions });
};

export { fetchMissions };
