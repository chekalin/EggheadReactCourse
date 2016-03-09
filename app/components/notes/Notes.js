var React = require('react');
var Noteslist = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    render: function() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <AddNote username={this.props.username} addNote={this.props.addNote} />
                <Noteslist notes={this.props.notes} />
            </div>
        );
    }
});

module.exports = Notes;