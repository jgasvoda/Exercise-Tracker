import React, { Component } from "react";
import axios from "axios";
import ExerciseForm from "./exercise-form.component";

export default class CreateExercise extends Component{

    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(exercise){
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => {
                console.log('exercise log created');
                window.location = '/';
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <h3>Create Exercise Log</h3>
                <ExerciseForm id="0" onSubmit={this.onSubmit}></ExerciseForm>
            </div>
        );
    }
}