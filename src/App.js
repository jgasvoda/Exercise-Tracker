import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserScreen from './users/user-screen.component';
import Navbar from './NavBar/navbar.component';
import CreateExercise from './exercise/create-exercise.component';
import ExerciseList from './exercise/exercise-list.component';
import EditExercise from './exercise/edit-exercise.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/users" component={UserScreen} />
        <Route path="/addExercise" component={CreateExercise} />
        <Route path="/editExercise/:id" component={EditExercise} />
      </div>
    </Router>
  );
}

export default App;
