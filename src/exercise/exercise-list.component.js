import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ExerciseList extends Component{

    constructor(props){
        super(props);

        this.fetchExercises = this.fetchExercises.bind(this);

        this.state ={
            exersizes: []
        }
    }

    componentDidMount(){
        this.fetchExercises();
    }

    fetchExercises(){
        axios.get('http://localhost:5000/exercises/')
            .then(res => this.setState({exersizes: res.data}))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.exersizes.map( exercise =>
                        <tr key={exercise._id}>
                            <td>{exercise.username}</td>
                            <td>{exercise.description}</td>
                            <td>{exercise.duration}</td>
                            <td>{exercise.date}</td>
                            <td>
                                <Link to={`/editExercise/${exercise._id}`} className="btn btn-info">
                                    <span className="glyphicon glyphicon-pencil">Edit</span> 
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}