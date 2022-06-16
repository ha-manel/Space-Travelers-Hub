import SpacesxService from '../../services/SpacexService';

const DRAGONS_FETCHED = 'spacehub/dragons/DRAGONS_FETCHED';
const TOGGLE_RESERVATION = 'spacehub/dragons/TOGGLE_RESERVATION';

async function fetchDragons(dispatch, getState) {
  const { dragons: currentDragons } = getState();

  if (currentDragons.length === 0) {
    const { data } = await SpacesxService.getDragons();
    const fetchedDragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      flickr_images: dragon.flickr_images[0],
      reserved: false,
    }));

    dispatch({ type: DRAGONS_FETCHED, payload: fetchedDragons });
  }
}

function toggleReservation(id) {
  return {
    type: TOGGLE_RESERVATION,
    payload: id,
  };
}

export default function dragons(state = [], action) {
  switch (action.type) {
    case TOGGLE_RESERVATION:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: !dragon.reserved };
        }
        return dragon;
      });
    case DRAGONS_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

export { fetchDragons, toggleReservation };
