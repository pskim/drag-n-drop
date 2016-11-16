'use strict';
(function(){
	function grab(className) {
		return document.getElementsByClassName(className)[0];
	}

	function handleDragStart(e) {
		e.preventDefault();
		console.log('started drag: '+ e.target.class);
		e.dataTransfer.setData('text/plain', e.target.class);
	}

	console.log('started')

	document.getElementsByClassName('item-0')[0].addEventListener('dragstart', function(e){
		e.preventDefault();
		e.dataTransfer.setData('text/plain', e.target.class);
	})

})();