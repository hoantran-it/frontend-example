var URL_REST_BASE = 'http://localhost:8088';
var USER_REST_BASE = URL_REST_BASE + '/user';

export default {
  STORE_NAME: "store",

  USER_REST: {
    GET_ALL: USER_REST_BASE + "/getAll"
  },

  USER: {
    ACTIONS: {
        GET_USER_LIST: "USER.ACTIONS.GET_USER_LIST"
    }
  },
};

