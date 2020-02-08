import React, { Component } from 'react';

class Notes extends Component {

    render() {
        return (
            <>
                {this.props.notes.map(note => {
                    return (
                        <div key={note.id} className="note">
                            <h3>{note.content}</h3>
                            <p>{note.author}</p>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Notes;