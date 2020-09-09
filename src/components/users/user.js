import React, { Component } from 'react';
import UserNav from '../users/usernav';
import Users from '../users/users';
import AddUsers from '../adduser/adduser';
import { Redirect } from 'react-router-dom';

class User extends Component {
render(){
        return(
            <div>
                {
                    this.props.location.state === undefined ?
                    <Redirect to="/" />
                    : 
                    <div>
                        <UserNav username={this.props.location.state.username} 
                        isloggedin={this.props.location.state.isloggedin}/>
                        {
                            this.props.location.state.userrole.toString().toLowerCase() === "normaluser" ?
                            //<h1>called add user</h1>
                            <AddUsers role={this.props.location.state.userrole}/>
                            :
                            //<h1>called users</h1>
                            <Users role={this.props.location.state.userrole}
                            isloggedin={this.props.location.state.isloggedin}/>
                        }
                    </div>
                }
               
            </div>
        )
    }
}

export default User;