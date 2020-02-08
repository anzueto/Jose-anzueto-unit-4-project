import React, { Component } from 'react';

class Notes extends Component {

    state = {
        notes: []
    }

    render() {
        return (
            <div>
                {this.props.content.map(note => {
                    return (
                        <div key={note.id} className="note">

                            <h3>{note.content}</h3>
                            <p>{note.author}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Notes;