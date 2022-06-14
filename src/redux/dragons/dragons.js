import axios from 'axios';

const DRAGONS_FETCHED = 'spacehub/dragons/DRAGONS_FETCHED';

async function fetchDragons(dispatch, getState) {
  const { dragons: currentDragons } = getState();

  if (currentDragons.length === 0) {
    const { data } = await axios.get('https://api.spacexdata.com/v3/dragons');
    const fetchedDragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      flickr_images: dragon.flickr_images[0],
    }));

    dispatch({ type: DRAGONS_FETCHED, payload: fetchedDragons });
  }
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
