import {
  render, screen, waitFor, fireEvent, act,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Dragons from './Dragons';
import MyProfile from '../my-profile/MyProfile';
import store from '../../redux/configureStore';
import axios from '../../http-common';

jest.mock('../../http-common');

describe('The Dragons page component', () => {
  beforeEach(async () => {
    const resp = {
      data: [
        {
          id: 'dragon1',
          name: 'Dragon 1',
          type: 'capsule',
          flickr_images: [
            'https://i.imgur.com/9fWdwNv.jpg',
          ],
        },
        {
          id: 'dragon2',
          name: 'Dragon 2',
          type: 'capsule',
          flickr_images: [
            'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg',
          ],
        },
      ],
    };
    await axios.get.mockResolvedValue(resp);
  });

  afterEach(() => {
    act(() => store.dispatch({
      type: 'spacehub/dragons/DRAGONS_FETCHED',
      payload: [],
    }));
  });

  it('should render the page', async () => {
    render(<Provider store={store}><Dragons /></Provider>);
    await waitFor(() => {
      expect(screen.getAllByText('Reserve Dragon').length).toBeGreaterThan(0);
    });
  });

  it('becomes a reserved dragon after a user clicks its reserve button', async () => {
    render(<Provider store={store}><Dragons /></Provider>);
    const buttons = await screen.findAllByText('Reserve Dragon');
    fireEvent.click(buttons[0]);

    const reservedBadge = await screen.findAllByText('Reserved');
    const cancelButtons = await screen.findAllByText('Cancel Reservation');
    expect(reservedBadge.length).toBe(1);
    expect(cancelButtons.length).toBe(1);
  });

  it('should cancel a reservation when the user clicks the cancel reservation button', async () => {
    render(<Provider store={store}><Dragons /></Provider>);
    const reserveButtons = await screen.findAllByText('Reserve Dragon');
    fireEvent.click(reserveButtons[0]);

    const cancelButtons = await screen.findAllByText('Cancel Reservation');
    fireEvent.click(cancelButtons[0]);

    const buttons = await screen.findAllByText('Reserve Dragon');
    expect(buttons.length).toBe(2);
  });

  test('that there is a reserved dragon after making a reservation', async () => {
    const { unmount } = render(<Provider store={store}><Dragons /></Provider>);
    const reserveButtons = await screen.findAllByText('Reserve Dragon');
    fireEvent.click(reserveButtons[0]);
    unmount();

    render(<Provider store={store}><MyProfile /></Provider>);
    expect(screen.queryByText('Dragon 1')).not.toBeNull();
  });

  test('that there are no reserved dragons at first MyProfile page component render', async () => {
    render(<Provider store={store}><MyProfile /></Provider>);
    await waitFor(() => {
      expect(screen.queryByText('You don\'t have dragon reservations yet.')).not.toBeNull();
    });
  });

  it('should mantain the snapshot between renders', async () => {
    const dom = render(<Provider store={store}><Dragons /></Provider>);

    await act(() => expect(dom).toMatchSnapshot());
  });
});
