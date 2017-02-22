import reactor from '../reactor';
import Constants from '../utils/Constants';

const UserAction = {
  getUserList: function () {
      $.getJSON(Constants.USER_REST.GET_ALL)
      .done((res) => {
          reactor.dispatch(Constants.USER.ACTIONS.GET_USER_LIST, res);
      }).fail(function(jqXHR, textStatus) {
          console.log("Can not get product list: " + jqXHR.responseJSON.message);
      });
  }
};

export default UserAction;
