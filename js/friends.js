function showFriends(){
    var xhr = new XMLHttpRequest();
	xhr.open("GET", "users.json", true);
	let requestErrorFunc = function() {
 alert( "ERROR: failed to load todoList" );
 };
    xhr.onload = function() {
       
       if (xhr.status >= 200 && xhr.status < 400) {     
	   var x = document.createElement("SELECT");
		x.setAttribute("id", "friends");
		x.setAttribute("name", "friends");
		var element = document.getElementById("sharing");
		element.appendChild(x);
		//document.body.appendChild(x);
		
		var z = document.createElement("option");
		var t = document.createTextNode("select friend");
		z.appendChild(t);
		document.getElementById("friends").appendChild(z);
		var x = document.getElementById("friends").options[0].disabled = true;
		var obj = JSON.parse(xhr.responseText);
		let array = obj.users;
		
		array.forEach(function(user){
			
				//document.getElementById("friends").innerHTML = '<option value="'+user.UserName+'">'+user.FirstName+" "+user.LastName+'</option>';
				var z = document.createElement("option");
				z.setAttribute("value", user.UserName);
				var t = document.createTextNode(user.FirstName+" "+user.LastName);
				z.appendChild(t);
				document.getElementById("friends").appendChild(z);
			});
			
		var btn = document.createElement("INPUT");
		btn.setAttribute("type", "submit");
		var element = document.getElementById("sharing");
		element.appendChild(btn);
    }
	else {
		requestErrorFunc();
	}
    
	
		
	
}
xhr.send();
}