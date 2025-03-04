import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    if (!this.isSaved(movie)) {
      const savedList = this.state.savedList;
      savedList.push(movie);
      this.setState( prevState => ({
        ...prevState,
        savedList: savedList
      }));
    }
  };
 isSaved = (movie) => {
   return !!this.state.savedList.find(mv => movie.id === mv.id)
 }
  render() {
    return (
      <div>
        <Router>
          <SavedList list={this.state.savedList} />
          <Route path="/" exact component={MovieList} />
          <Route path={'/movies/:id'}  
            render={ (props) => <Movie addToSavedList={this.addToSavedList} {...props} />}
          />
        </Router>
      </div>
    );
  }
}
