import reactor from '../reactor';
import Constants from '../utils/Constants';

const UserAction = {
  getUserListByGender: function (isMale) {
      $.ajax({
          type: "POST",
          url: Constants.USER_REST.GET_BY_GENDER,
          data: JSON.stringify({
            isMale: isMale
          }),
          contentType: "application/json"
      }).done(function (res) {
          reactor.dispatch(Constants.USER.ACTIONS.GET_USER_LIST, res);
      }).fail(function( jqXHR, textStatus ) {
          console.log("Can not get user list: " + jqXHR.responseJSON.message);
      });
  },
  
  getUserList: function () {
      $.getJSON(Constants.USER_REST.GET_ALL)
      .done((res) => {
          reactor.dispatch(Constants.USER.ACTIONS.GET_USER_LIST, res);
      }).fail(function(jqXHR, textStatus) {
          console.log("Can not get user list: " + jqXHR.responseJSON.message);
      });
  }
};

export default UserAction;
