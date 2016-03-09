var React = require('react');
var Noteslist = require('./NotesList');

var Notes = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Notes for {this.props.username}</h3>
                <Noteslist notes={this.props.notes} />
            </div>
        );
    }
});

module.exports = Notes;