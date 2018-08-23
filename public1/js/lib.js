internsApp = {};

(function(){

	function fnCreate(){
		uid = $('#appName').val();
		var path = 'App_list/' + uid;
		var package_name = $("#package_name").val();
		var dev_name = $("#dev_name").val();
		var dev_url = $("#dev_url").val();
		var dev_email = $("#dev_email").val();
		var playstore = $("#playstore").val();
		var file_size = $("#file_size").val();
		var app_description = $("#app_description").val();
		var tags = $("#tags").val();
		var app_category = $("#app_category").val();
		var average_rating = $("#average_rating").val();
		var total_rating = $("#total_rating").val();
		var no_download = $("#no_download").val();
		var update_date = $("#update_date").val();
		var entry_date = $("#entry_date").val();

		var data = {
		    package_name: package_name,
			dev_name: dev_name,
			dev_url: dev_url,
			dev_email: dev_url,
			playstore: playstore,
			file_size: file_size,
			app_description: app_description,
			tags: tags,
			app_category: app_category,
			average_rating: average_rating,
			total_rating: total_rating,
			no_download: no_download,
			update_date: update_date,
			entry_date: entry_date
		}
		fb.data.create(path, data, messageHandler);
	}

	function fnRead(){
		var path = 'App_list/';
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				var results = snapShot.val();
				console.log(results);
				var keys = Object.keys(results);
				console.log("Key: " + keys); 
				var interns = [];
				keys.forEach(function(key){
					var newElement = {}
					var name = results[key].name;
					var project = results[key].project;
					var team = results[key].team;
					newElement['key'] = key;
					newElement['name'] = name;
					newElement['team'] = team;
					newElement['project'] = project;
					interns.push(newElement);
					console.log(key, name, project, team);
	  		});
				console.log(App_list);
				internsObj = { internsBinding: App_lists}
				ko.applyBindings(internsObj);
		}
}
}

	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	internsApp.Create = fnCreate;
	internsApp.Read = fnRead;
})()

//internsApp.Read();