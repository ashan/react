var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
	render: function(){
		return <nav className="nav navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link to="/" className="navbar-brand">
						Imgur Browser
					</Link>
				</div>
				<ul className="nav navbar-nav navbar-right">
					<li>
						<a> Topic #1</a>
					</li>
				</ul>
			</div>
		</nav>
	}
});