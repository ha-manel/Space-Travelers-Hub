import axios from 'axios';

const DRAGONS_FETCHED = 'DRAGONS_FETCHED';

async function fetchDragons(dispatch) {
  const { data } = await axios.get('https://api.spacexdata.com/v3/dragons');
  const dragons = data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    flickr_images: dragon.flickr_images[0],
  }));

  dispatch({ type: DRAGONS_FETCHED, payload: dragons });
}

export default function dragons(state = [], action) {
  switch (action.type) {
    case DRAGONS_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

export { fetchDragons };
