var URL_REST_BASE = 'https://ithink-backend.herokuapp.com';
var USER_REST_BASE = URL_REST_BASE + '/user';

export default {
  STORE_NAME: "store",

  USER_REST: {
    GET_ALL: USER_REST_BASE + "/getAll",
    GET_BY_GENDER: USER_REST_BASE + "/getUserByGender"
  },

  USER: {
    ACTIONS: {
        GET_USER_LIST: "USER.ACTIONS.GET_USER_LIST"
    }
  },
};

