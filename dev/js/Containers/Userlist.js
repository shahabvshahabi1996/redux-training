import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../Actions/index'
class UserList extends React.Component{
    CreateListItem(){
        return this.props.users.map((user,i)=>{
                return(
                    <li onClick={()=>{this.props.selectUser(user)}} key={i}>{user.firstName} {user.lastName}</li>
                )
            })
    }
    render(){
        return(
            <ul>
                {this.CreateListItem()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        users : state.users,
        activeUser : state.activeUser
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser : selectUser},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);