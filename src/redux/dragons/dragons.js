import axios from 'axios';

const fetchDragons = async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v3/dragons');
  console.log(data);
};

export default function dragons(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { fetchDragons };
