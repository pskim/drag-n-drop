'use strict';
(function(){
	var $container = document.getElementById('list-container');

	$container.addEventListener('dragstart', function(e){
		var className = e.target.className;
		e.dataTransfer.setData('text/plain', className);
		e.dataTransfer.effectAllowed = "move";
		e.dropEffect = "move";
	})

	$container.addEventListener('dragover', function(e){e.preventDefault();})
	$container.addEventListener('dragover', function(e){e.preventDefault();})

	$container.addEventListener('drop', function(e){
		var dropItemClass = e.target.className;
		var draggedItemClass = e.dataTransfer.getData("Text");

		var $draggedItem = document.getElementsByClassName(draggedItemClass)[0].parentNode;
		var clonedItem = $draggedItem.cloneNode(true);

		var removeOriginalItem = $container.removeChild($draggedItem);

		var $droppedItemLocation = document.getElementsByClassName(dropItemClass)[0].parentNode;
		$container.insertBefore(clonedItem, $droppedItemLocation);
	})
})();