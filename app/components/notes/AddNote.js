var React = require('react');
var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    setRef: function (ref) {
        this.note = ref;
    },
    handleSubmit: function () {
        var newNote = this.note.value;
        this.props.addNote(newNote);
    },
    render: function () {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="add new note" ref={this.setRef}/>
                <span className="input-group-btm">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>
                        Add Note
                    </button>
                </span>
            </div>
        );
    }
});
module.exports = AddNote;