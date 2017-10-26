import React from 'react';
import UserList from '../Containers/Userlist.js';
import UserDetail from '../Containers/UserDetail.js';
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>User List</h1>
                <UserList/>
                <hr/>
                <h1>User Details</h1>
                <UserDetail/>
            </div>
        )
    }
}
export default App;