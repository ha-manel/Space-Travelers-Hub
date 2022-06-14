import http from '../http-common';

const getRockets = () => http.get('/rockets');
const getDragons = () => http.get('/dragons');
const getMissions = () => http.get('/missions');

const SpacesxService = {
  getRockets,
  getDragons,
  getMissions,
};

export default SpacesxService;
