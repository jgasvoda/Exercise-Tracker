import React, { Component } from "react";
import DatePicker from "react-datepicker";
import Axios from "axios";

export default class ExerciseForm extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.sendData = this.sendData.bind(this);
        this.getExerciseById = this.getExerciseById.bind(this);
        this.fillData = this.fillData.bind(this);

        let submitText = '';
        if(this.props.id === '0') {
            submitText = 'Create Exercise Log';
        }
        else {
            submitText = 'Edit Exercise Log';
        }

        this.state = {
            id: this.props.id,
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            submitText: submitText
        }
    }

    getExerciseById(id) {
        Axios.get('http://localhost:5000/exercises/' + id)
            .then(res => this.fillData(res.data))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        if(this.state.id !== undefined && this.state.id !== '0') {
            this.getExerciseById(this.state.id);
        }
    }

    fillData(exercise) {
        //console.log(exercise);
        this.setState({
            username: exercise.username,
            description: exercise.description,
            duration: exercise.duration,
            date: new Date(exercise.date)
        })
    }

    onChangeUsername(e){
        this.setState({username: e.target.value});
    }

    onChangeDescription(e){
        this.setState({description: e.target.value});
    }

    onChangeDuration(e){
        this.setState({duration: e.target.value});
    }

    onChangeDate(date){
        this.setState({date: date});
    }

    sendData(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
            _id: this.state.id
        }

        this.props.onSubmit(exercise);
    }

    render() {
        return(
                <form onSubmit={this.sendData}>
                    <div className="form-gorup">
                        <label>Username: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-gorup">
                        <label>Description: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-gorup">
                        <label>Duration: </label>
                        <input  type="text"
                        required
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value={this.state.submitText} className="btn btn-primary" />
                    </div>
                </form>
        );
    }
}