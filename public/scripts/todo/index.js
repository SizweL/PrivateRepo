let request = new XMLHttpRequest();
request.open('GET', '/todo/api/list', true);

let requestErrorFunc = function() { 
	alert( "ERROR: failed to load todoList" );
};


request.onload = function (data) {
 if (request.status >= 200 && request.status < 400) {
	let data = JSON.parse(request.responseText);
	let todoList = document.getElementById('todoList');
	 data.forEach(function(todoItem){ 
		 let li = document.createElement("LI"); 
		let liText = document.createTextNode(todoItem); 
		li.className += 'todo-item';
		li.appendChild(liText);
		todoList.appendChild(li);
	 });
 } else {
 requestErrorFunc();
 }
}; 

 request.onerror = requestErrorFunc;
 request.send();

let button = document.getElementById('helloButton')

button.addEventListener('click', function(){
	alert( "Hello World!" );
},false);