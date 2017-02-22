import reactor from "../reactor";
import getters from "../getters"
import UserAction from "../actions/UserAction";
import UserComponent from "../components/UserComponent";

const UserListComponent = React.createClass({
    mixins: [reactor.ReactMixin],
    
    componentWillMount: function () {
        UserAction.getUserList();
    },
      
    getDataBindings: function () {
        return {
          userList: getters.absolutePath(getters.User.userList)
        };
    },
      
    onTrigger: function () {
        UserAction.getUserList();
        this.setState({
          currentPage: 0
        });
    },
      
    render: function () {
        let userList = "";
        if(typeof this.state.userList != 'undefined'){
            let users = this.state.userList.toJS();
            userList = users.map((item, index) => {
                return (
                        <UserComponent  key={index}
                                        userName={item.userName}
                                        userId={item.id}
                                        userAge={item.age} />
                );
            });
          }
        
        return (
            <div>
                <button onClick={this.onTrigger}>
                    <b>Trigger</b>
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