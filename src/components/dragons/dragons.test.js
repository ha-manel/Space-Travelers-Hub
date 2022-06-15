import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dragons from './Dragons';
import store from '../../redux/configureStore';
import axios from '../../http-common'
jest.mock('../../http-common');

describe("The Dragons page component", () => {
  beforeEach(async () => {
    const resp = {
      data: [
        {
          "id": "dragon1",
          "name": "Dragon 1",
          "type": "capsule",
          "flickr_images": [
            "https://i.imgur.com/9fWdwNv.jpg",
          ],
        },
        {
          "id": "dragon2",
          "name": "Dragon 2",
          "type": "capsule",
          "flickr_images": [
            "https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg",
          ],
        }
      ]
    };
    await axios.get.mockResolvedValue(resp)
  });

  it("should render the page", async () => {
    render(<Provider store={store}><Dragons /></Provider>)
    await waitFor(() => expect(screen.getAllByText('Reserve Dragon').length).toBeGreaterThan(0));
  });

})