import Constants from "./utils/Constants";

export default {
  User: {
    userList: ["userList"]
  },

  absolutePath(keyPath) {
    return lodash.concat([Constants.STORE_NAME], keyPath);
  }
};
