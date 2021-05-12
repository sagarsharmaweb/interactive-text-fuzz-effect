window.addEventListener("load",function(){
	var nodes = document.querySelectorAll(".fuzz");
	for(var i=0; i<nodes.length; i++){
		var newNode = document.createElement("span");
		newNode.innerText = nodes[i].innerText;
		nodes[i].appendChild(newNode);
	}
});
