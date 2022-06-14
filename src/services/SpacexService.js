import http from '../http-common';

const getRockets = () => http.get('/rockets');
const getDragons = () => http.get('/dragons');

const SpacesxService = {
  getRockets,
  getDragons,
};

export default SpacesxService;
