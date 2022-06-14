import SpacesxService from '../../services/SpacexService';

const ADD_ALL_ROCKETS = 'spacehub/rockets/ADD_ALL_ROCKETS';
const TOGGLE_RESERVATION = 'spacehub/rockets/TOGGLE_RESERVATION';

export default function rockets(state = [], action = {}) {
  switch (action.type) {
    case ADD_ALL_ROCKETS:
      return action.payload;
    case TOGGLE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    default:
      return state;
  }
}

export const getRockets = async (dispatch, getState) => {
  const currRockets = getState().rockets;
  if (currRockets.length === 0) {
    const { data } = await SpacesxService.getRockets();
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      reserved: false,
    }));
    dispatch({ type: ADD_ALL_ROCKETS, payload: rockets });
  }
};

export const reserveRocket = (id) => ({ type: TOGGLE_RESERVATION, payload: id });
