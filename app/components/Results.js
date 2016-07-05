var React = require('react');
var PropTypes = React.PropTypes;

var Results = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

Results.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired,

}

module.exports = Results;