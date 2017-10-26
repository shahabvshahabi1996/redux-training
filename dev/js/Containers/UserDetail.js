import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../Actions/index'
class UserDetail extends React.Component{
    CreateListItem(){
        if(this.props.user !== " ")
        return(
            <div>
                <h2>{this.props.user.firstName} {this.props.user.lastName}</h2>
                <h3> Age :  {this.props.user.age}</h3>
                <h4> Skills :  {this.props.user.skills}</h4>
            </div>
        )
        else{
            return " "
        }
    }
    render(){
        return(
            <div>
                {this.CreateListItem()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);