import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from './Missions';
import MyProfile from '../my-profile/MyProfile';
import store from '../../redux/configureStore';
import axios from '../../http-common';

jest.mock('../../http-common');

describe('The Missions section tests', () => {
  beforeEach(async () => {
    const result = {
      data: [
        {
          mission_id: '9D1B7E0',
          mission_name: 'Thaicom',
          description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        },
        {
          mission_id: 'F4F83DE',
          mission_name: 'Telstar',
          description: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        },
      ],
    };
    await axios.get.mockResolvedValue(result);
  });

  afterEach(() => {
    act(() => store.dispatch({
      type: 'spacehub/missions/LOAD_MISSIONS',
      payload: [],
    }));
  });

  test('should render the missions page', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Join Mission').length).toBeGreaterThan(1);
    });
  });

  test('Leave mission when the user clicks on "Leave Mission" button', async () => {
    render(<Provider store={store}><Missions /></Provider>);
    const joinButtons = await screen.findAllByText('Join Mission');
    fireEvent.click(joinButtons[0]);

    const leaveButtons = await screen.findAllByText('Leave Mission');
    fireEvent.click(leaveButtons[0]);

    const buttons = await screen.findAllByText('Join Mission');
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('There are no joined missions at first in "My Profile"', async () => {
    render(<Provider store={store}><MyProfile /></Provider>);
    await waitFor(() => {
      expect(screen.queryByText('You haven\'t joined any missions yet')).not.toBeNull();
    });
  });
});
