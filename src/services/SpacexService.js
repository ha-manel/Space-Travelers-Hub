import http from '../http-common';

const getRockets = () => http.get('/rockets');

const SpacesxService = {
  getRockets,
};

export default SpacesxService;
