import SpacesxService from '../../services/SpacexService';

const ADD_ALL_ROCKETS = 'spacehub/rockets/ADD_ALL_ROCKETS';

export default function rockets(state = [], action = {}) {
  switch (action.type) {
    case ADD_ALL_ROCKETS:
      return action.payload;
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
    }));
    dispatch({ type: ADD_ALL_ROCKETS, payload: rockets });
  }
};
