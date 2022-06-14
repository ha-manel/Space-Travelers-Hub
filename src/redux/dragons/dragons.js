import SpacesxService from '../../services/SpacexService';

const DRAGONS_FETCHED = 'spacehub/dragons/DRAGONS_FETCHED';
const DRAGON_RESERVED = 'spacehub/dragons/DRAGON_RESERVED';
const CANCEL_DRAGON_RESERVATION = 'spacehub/dragons/CANCEL_DRAGON_RESERVATION';

async function fetchDragons(dispatch, getState) {
  const { dragons: currentDragons } = getState();

  if (currentDragons.length === 0) {
    const { data } = await SpacesxService.getDragons();
    const fetchedDragons = data.map((dragon) => ({
      id: dragon.id,
      name: dragon.name,
      type: dragon.type,
      flickr_images: dragon.flickr_images[0],
    }));

    dispatch({ type: DRAGONS_FETCHED, payload: fetchedDragons });
  }
}

function reserveDragon(id) {
  return {
    type: DRAGON_RESERVED,
    payload: id,
  };
}

function cancelDragonReservation(id) {
  return {
    type: CANCEL_DRAGON_RESERVATION,
    payload: id,
  };
}

export default function dragons(state = [], action) {
  switch (action.type) {
    case CANCEL_DRAGON_RESERVATION:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
    case DRAGON_RESERVED:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
    case DRAGONS_FETCHED:
      return action.payload;
    default:
      return state;
  }
}

export { fetchDragons, reserveDragon, cancelDragonReservation };
