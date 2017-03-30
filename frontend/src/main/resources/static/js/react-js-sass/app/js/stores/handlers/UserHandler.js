import Constants from "../../utils/Constants";
import getters from "../../getters";

const functions = {

  getUserList(state, payload) {
    return state.setIn(lodash.concat(getters.User.userList), Nuclear.toImmutable(payload));
  },

  initialize(store) {
    store.on(Constants.USER.ACTIONS.GET_USER_LIST, functions.getUserList);
  }
};

export default functions;
