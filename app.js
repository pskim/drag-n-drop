'use strict';
(function(){
	var $container = document.getElementById('list-container');
	// var dataBase = [[0,1,2,3,4,5,6,7,8,9,10,11]];

	document.getElementById('list-container').addEventListener('dragstart', function(e){
		var className = e.target.className
		e.dataTransfer.setData('text/plain', className);
	})

	document.getElementById('list-container').addEventListener('dragover', function(e){e.preventDefault();})
	document.getElementById('list-container').addEventListener('dragover', function(e){e.preventDefault();})

	document.getElementById('list-container').addEventListener('drop', function(e){
		// e.preventDefault();
		var dropItemClass = e.target.className;
		var draggedItemClass = e.dataTransfer.getData("Text");

		var draggedItem = document.getElementsByClassName(draggedItemClass)[0].parentNode;
		var clonedItem = draggedItem.cloneNode(true);

		var removeOriginalItem = $container.removeChild(draggedItem);

		// var parent = e.target.parentNode
		// parent.parentNode.removeChild(parent);
		// console.log(parent)
		var droppedItemLocation = document.getElementsByClassName(dropItemClass)[0];
		droppedItemLocation = droppedItemLocation.parentNode;
		$container.insertBefore(clonedItem, droppedItemLocation);
		console.log($container) 


		// moveImg(draggedItem, dropItem)

		// console.log('dropped at:' + dropItem)
		// console.log(draggedItem)
	})

	// function moveImg(draggedItem, dropLocation) {
	// 	var currentState = copyOfLatestState();
	// 	var addAtIndex = currentState.indexOf(dropLocation);
	// 	for (var i = 0; i < currentState.length; i++) {
	// 		if (currentState[i] == draggedItem) {
	// 			var pulledItem = currentState.splice(i,1)[0];
	// 			currentState.splice(dropLocation, 0, pulledItem)

	// 			console.log($container.childNodes[0])
	// 			var pulledDomItem = $container.removeChild($container.childNodes[i * 2]);
	// 			// $container.prepend(pulledDomItem);	
	// 		} 
	// 	}
	// 	dataBase.push(currentState);
	// }
	
	// function copyOfLatestState() {
	// 	var previousIndex = dataBase.length - 1;
	// 	var currentState = dataBase[previousIndex];
	// 	return currentState.slice(0);
	// }

	// function findItem(item) {
	// 	for (var i = 0; i < $container.length; i++) {
	// 		if ($container[i].className === item)
	// 	}
	// }

	// function addDraggedItem(dragItem, dropZone){
	// 	var dropHere = document.getElementById(dropZone)
	// }

})();