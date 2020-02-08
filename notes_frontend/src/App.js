import React, { Component } from 'react';

// import './App.css';
import Notes from './components/Notes.js';

class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    this.getNotes();
  }

  // this gets the data that i have on seed file in the back end
  getNotes = () => {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(json => this.setState({ notes: json }))
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <p>notes</p>
        <Notes content={this.state.notes} />

      </div>
    )
  }
}

export default App;
