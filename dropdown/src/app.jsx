var React = require('react');
var Dropdown = require('./dropdown');

var options ={
	title: 'Choose a dessert', // what should show up on the dropdown button (open/close)
	items: [ // list of items in the dropdown
		'Apple Pie',
		'Peach Cobbler',
		'Coconut Cream Pie'
	]
};

// React render
var element = React.createElement(Dropdown, options);

// place in body tag	
React.render(element, document.querySelector('.target'));