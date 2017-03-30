import reactor from "../reactor";
import getters from "../getters"
import UserAction from "../actions/UserAction";
import UserComponent from "../components/UserComponent";

const UserListComponent = React.createClass({
  mixins: [reactor.ReactMixin],

  getInitialState: function () {
    return {
      isMale: true
    };
  },

  componentWillMount: function () {
    UserAction.getUserList();
  },

  getDataBindings: function () {
    return {
      userList: getters.absolutePath(getters.User.userList)
    };
  },

  onTrigger: function () {
    UserAction.getUserListByGender(this.state.isMale);
    this.setState({
      isMale: !this.state.isMale
    });
  },

  render: function () {
    let userList = "";
    let buttonLabel = "Get female list";
    if (this.state.isMale) {
      buttonLabel = "Get male list";
    }
    if (typeof this.state.userList != 'undefined') {
      let users = this.state.userList.toJS();
      userList = users.map((item, index) => {
        return (
          <UserComponent key={index}
                         userName={item.userName}
                         userId={item.id}
                         userAge={item.age}
                         userGender={item.isMale}/>
        );
      });
    }

    return (
      <div>
        <button onClick={this.onTrigger}>
          <b>{buttonLabel}</b>
        </button>
        <br/>
        <ul>
          {userList}
        </ul>
      </div>
    )
  }
});

export default UserListComponent;