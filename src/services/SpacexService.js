import http from '../http-common';

const getRockets = () => http.get('/rockets');
const getMissions = () => http.get('/missions');

const SpacesxService = {
  getRockets,
  getMissions,
};

export default SpacesxService;
