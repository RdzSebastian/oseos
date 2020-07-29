// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	var admin = getUrlVars()["admin"];
	
	if ( username == "server" && password == "os3os"){
		window.location = "../admin/" + admin + ".html"; // Redirecting to other page.
	} else{
		window.location = "error.html"; // Redirecting to other page.
	}
}

function getUrlVars() {
	var vars = {}; 
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { 
	   vars[key] = value; 
	});
	return vars; 
}
