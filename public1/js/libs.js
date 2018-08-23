var internsApp = {};

(function(){
function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}

	function fnRead(){
		var path = 'interns/';
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log(snapShot.val());
				/*
				var results = snapShot.val();
				var keys = Object.keys(results);
				console.log("KEYS" + keys);
				var interns = [];
				keys.forEach(function(key){
					var newElement = {};
					var name = results[key].name;
					var project = results[key].project;
					var team = results[key].team;
					newElement['key'] = key;
					newElement['name'] = name;
					newElement['project'] = project;
					newElement['team'] = team;
					interns.push(newElement);
					console.log(key, name, project, team);
				});*/
	  	}
		}
	}
	internsApp.Read = fnRead;
})()
