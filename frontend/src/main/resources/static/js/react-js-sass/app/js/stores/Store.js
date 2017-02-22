import UserHandler from "./handlers/UserHandler";

export default Nuclear.Store({
  initialize: function() {
      UserHandler.initialize(this);
  }
});
