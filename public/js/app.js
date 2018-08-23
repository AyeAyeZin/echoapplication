$(document).ready(function(){
	var database = firebase.database().ref().child("apps");
	database.on("child_added", snap => {
		var app_name = snap.child("app_name").val();
		
		$("#apps").append("<tr><td>"+ app_name + "</td></tr>");

	});
});