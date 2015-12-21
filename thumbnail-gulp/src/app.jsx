var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
	thumbnailData : [{
		title: 'Show Courses', 
		number: 32,
		imageUrl:'react.svg',
		header: 'Learn React' ,
		description: 'React is a fanatastic library for making fast dynamic pages. React is a fanatastic library for making fast dynamic pages',
		title: 'See Tutorials',
		number: 14,
		class: 'col-md-6'
	},{
		title: 'Show Courses', 
		number: 26,
		imageUrl:'gulp.png',
		header: 'Learn Gulp' ,
		description: 'Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
		title: 'Learn Gulp',
		number: 13,
		class: 'col-md-6'
	}
]};

// React render
var element = React.createElement(ThumbnailList, options);

// place in body tag	
React.render(element, document.querySelector('.target'));