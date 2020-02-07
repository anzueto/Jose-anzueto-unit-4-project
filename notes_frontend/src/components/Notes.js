import React, { Component } from 'react';

class Notes extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
        this.getNotes()
    }

    getNotes = () => {
        fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
    }


    render() {
        return (
            <h1>Notes Reminders</h1>
        )
    }
}

export default Notes;