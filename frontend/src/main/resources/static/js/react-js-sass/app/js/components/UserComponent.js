const UserComponent = React.createClass({
    propTypes: {
        userName: React.PropTypes.string.isRequired,
        userId: React.PropTypes.number.isRequired,
        userAge: React.PropTypes.number.isRequired
    }, 
    
    render: function () {
        return (
            <li>
                <div >{this.props.userName}</div>
                <div >{this.props.userId}</div>
                <div >{this.props.userAge}</div>
            </li>
        )
    }
});

export default UserComponent;