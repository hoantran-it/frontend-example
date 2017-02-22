const UserComponent = React.createClass({
    propTypes: {
        userName: React.PropTypes.string.isRequired,
        userId: React.PropTypes.number.isRequired,
        userAge: React.PropTypes.number.isRequired,
        userGender: React.PropTypes.bool
    }, 
    
    render: function () {
        let gender = "Female";
        if(this.props.userGender){
            gender = "Male";
        }
        return (
            <li>{this.props.userId} - {this.props.userName} - {gender} - {this.props.userAge} years old</li>
        )
    }
});

export default UserComponent;