import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/Users" className="nav-link">Manage Users</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/AddExercise" className="nav-link">Add Exercise Entry</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}