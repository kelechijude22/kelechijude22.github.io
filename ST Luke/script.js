// save name and redirect to complaint page 
function saveName() {
	let username = 
	document.getElementById()("username").value;
		if(username.trim() !==""{

			localStorage.setItem("username",username); 
			//Save name in browser storage
			window.location.href = "complaint.html";
			//Redirect to complaint page
		}else {
			alert("please enter your name before continuing,");
		}
	}

// Display saved name on complaint page
Window.onload = function(){
	let username = document.getElementById("username").value;
	if (username.trim() !== "") {
		localStorage.setItem("username", username);
		// save name in browser storage
		window.location.href = "complaint.html"; 
		// Redirect to complaint page
	} else {
		alert("please enter your name before continuing.");
	}
}
