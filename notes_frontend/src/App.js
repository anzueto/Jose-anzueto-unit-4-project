import React, { Component } from 'react';

// import './App.css';
import Notes from './components/Notes.js';

class App extends Component {
  state = {
    notes: [],
    formInputs: {
      author: '',
      content: ''
    }
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

  // allows us to type in the input fields
  handleChange = event => {
    const updateInput = Object.assign(this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }

  handleSubmit = event => {
    // preventing reseting form on change
    event.preventDefault()
    fetch('http://localhost:3000/notes',
      {
        body: JSON.stringify(this.state.formInputs),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(createdNote => {
        return createdNote.json()
      })
      .then(jsonedNote => {
        // reset the form
        // add notes to notes
        this.setState({
          formInputs: {
            author: '',
            content: ''
          },
          notes: [jsonedNote, ...this.state.notes]
        })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
        <h2>Add a new reminder</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Content</label>
          <input type="text" id="content" value={this.state.formInputs.content} onChange={this.handleChange} />

          <label htmlFor="author">Author</label>
          <input type="text" id="author" value={this.state.formInputs.author} onChange={this.handleChange} />

          <input type="submit" className="submit" />
        </form>

        <Notes notes={this.state.notes} />

      </div>
    )
  }
}

export default App;
