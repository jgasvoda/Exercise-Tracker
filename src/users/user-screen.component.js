import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

export default class UserScreen extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            users: [],
            newUserName: ''
        }
    }

    fetchUsers() {
        axios.get('http://localhost:5000/users/')
            .then(res => this.setState({users: res.data || []}))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    onChangeUserName(e) {
        this.setState({newUserName: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {username: this.state.newUserName};

        axios.post('http://localhost:5000/users/add', newUser)
            .then(res => this.fetchUsers())
            .catch(err => console.log(err));

        this.setState({newUserName: ''});
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/' + id)
            .then(res => this.fetchUsers())
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div> Users
                <ul>
                    {this.state.users.map(user =>
                        <li key={user.username}>
                            Name: {user.username} <button type="button" className="close" onClick={() => this.deleteUser(user._id)}>x</button>
                        </li>
                    )}
                </ul>
                <input type="text" value={this.state.newUserName} onChange={this.onChangeUserName}></input>
                <button onClick={this.onSubmit}>Add User</button>
            </div>
        );
    }
}