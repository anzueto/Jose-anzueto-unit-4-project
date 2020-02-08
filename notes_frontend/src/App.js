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

        <Notes content={this.state.notes} />
        <p>Add new Reminder</p>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Content</label>
          <input type="text" id="content" value={this.state.formInputs.content} onChange={this.handleChange} />

          <label htmlFor="author">Author</label>
          <input type="text" id="author" value={this.state.formInputs.content} onChange={this.handleChange} />

          <input type="submit" className="submit" />
        </form>

      </div>
    )
  }
}

export default App;
