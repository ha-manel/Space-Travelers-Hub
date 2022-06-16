import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from './Rockets';
import MyProfile from '../my-profile/MyProfile';
import store from '../../redux/configureStore';
import axios from '../../http-common';

jest.mock('../../http-common');

describe('Rockets Component', () => {
  beforeEach(async () => {
    const state = {data: [
      {
        id: 1,
        name: 'Falcon 1',
        description: 'fast',
        flickr_images: ["https://imgur.com/DaCfMsj.jpg"],
      },
      {
        id: 2,
        name: 'Falcon 9',
        description: 'more fast',
        flickr_images: ["https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg"],
      },
      {
        id: 3,
        name: 'Falcon Heavy',
        description: 'even more fast',
        flickr_images: ["https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg"],
      },
      {
        id: 4,
        name: 'Starship',
        description: 'fast fast',
        flickr_images: ["https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg"],
      }
      
    ]};
    await axios.get.mockResolvedValue(state);
  });

  afterEach(() => {
    act(() => store.dispatch({
      type: 'spacehub/rockets/ADD_ALL_ROCKETS',
      payload: [],
    }));
  });

  it('renders correctly', async () => {
    render(<Provider store={store}><Rockets/></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Reserve Rocket').length).toBeGreaterThan(0);
    });
  });

  it('reserves a rocket on clicking the reserve button', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
    const reserveBtns = await screen.findAllByText('Reserve Rocket');
    fireEvent.click(reserveBtns[0]);
    const reservedBadges = await screen.findAllByText('Reserved');
    expect(reservedBadges.length).toBeGreaterThan(0);
  });

  it('maintains the snapshots between renders', async () => {
    const tree = render(<Provider store={store}><Rockets/></Provider>);
    await act(() => expect(tree).toMatchSnapshot());
  });
});

