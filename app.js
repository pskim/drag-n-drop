'use strict';
(function(){

	console.log('started')
	function grab(className) {
		return document.getElementsByClassName(className)[0];
	}

	document.getElementsByTagName('li')[0].addEventListener('dragstart', function(e){
		// e.preventDefault();
		console.log('dragging started')
		e.dataTransfer.setData('text/plain', e.target.className);
		e.dataTransfer.dropEffecet = "all"
		e.dataTransfer.effectAllowed = "all"

	})

	document.getElementsByTagName('li')[1].addEventListener('dragover', function(e){
		e.preventDefault();
	})

	document.getElementsByTagName('li')[1].addEventListener('dragover', function(e){
		e.preventDefault();
	})

	document.getElementsByTagName('li')[1].addEventListener('drop', function(e){
		// e.preventDefault();
		console.log('dropped')
		var dat = e.dataTransfer.getData("Text");
		console.log(dat)
	})








	document.getElementsByTagName('li')[1].addEventListener('dragstart', function(e){
		// e.preventDefault();
		console.log('dragging started')
		e.dataTransfer.setData('text/plain', e.target.className);
		e.dataTransfer.dropEffecet = "all"
		e.dataTransfer.effectAllowed = "all"

	})

	document.getElementsByTagName('li')[0].addEventListener('dragover', function(e){
		e.preventDefault();
	})

	document.getElementsByTagName('li')[0].addEventListener('dragover', function(e){
		e.preventDefault();
	})

	document.getElementsByTagName('li')[0].addEventListener('drop', function(e){
		// e.preventDefault();
		console.log('dropped')
		var dat = e.dataTransfer.getData("Text");
		console.log(dat)
	})
})();