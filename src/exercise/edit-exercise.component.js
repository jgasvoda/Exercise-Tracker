import React, { Component } from "react";
import ExerciseForm from "./exercise-form.component";
import Axios from "axios";

export default class EditExercise extends Component{

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(exercise) {
        console.log(exercise);
        Axios.post('http://localhost:5000/exercises/update/' + exercise._id, exercise)
            .then(res => {
                console.log('exercise log updates');
                window.location = '/';
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <h3>Edit Exercise Log</h3>
                <ExerciseForm id={this.props.match.params.id} onSubmit={this.onSubmit}></ExerciseForm>
            </div>
        );
    }
}