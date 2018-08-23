var internsApp = {};

(function(){
	//var uid = "1";
	/*
			// User is signed in
			uid = user.uid;
		}else{
			// redirect to login page
			uid = null;
			window.location.replace("login.html");
		}
	});
*/
	function logOut(){
		firebase.auth().signOut();
	}
	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}

	function fnCreate(){
		uid = $('#internIDCreate').val();
		var path = 'interns/' + uid;
		var internName = $("#internNameCreate").val();
		var internTeam = $("#internTeamCreate").val();
		var data = {
			name: internName,
			team: internTeam
		}
		fb.data.create(path, data, messageHandler);
	}

	function fnRead(){
		var uid = $("#internNameRead").val();
		var path = 'App_list/' + uid;
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log(snapShot.val());
				$("#packageNameResult").html(snapShot.val().package_name);
                $("#internDevNameResult").html(snapShot.val().dev_name);
                $("#playstoreLinkResult").html(snapShot.val().playstore);
                        $("#devUrlResult").html(snapShot.val().dev_url);
                        $("#devEmailResult").html(snapShot.val().dev_email);
                        $("#fileSizeResult").html(snapShot.val().file_size);
                        $("#appDescriptionResult").html(snapShot.val().app_description);
                        $("#tagsResult").html(snapShot.val().tags);
                        $("#appCategoryResult").html(snapShot.val().app_category);
                        $("#noOfDownloadResult").html(snapShot.val().no_download);
                        $("#averageRatingResult").html(snapShot.val().average_rating);
                        $("#totalRatingResult").html(snapShot.val().total_rating);
                        $("#updateDateResult").html(snapShot.val().update_date);
                        $("#entryDateResult").html(snapShot.val().entry_date);
	  	}
		}
	}

	function fnUpdate(){
		uid = $('#internID').val();
		var path = 'interns/' + uid;
		var internName = $("#internName").val();
		var internTeam = $("#internTeam").val();
		var data = {
			name: internName,
			team: internTeam
		}
		fb.data.update(path, data, messageHandler);
	}

	function fnDelete(){
		uid = $("#internID").val();
		var path = 'interns/' + uid;
		fb.data.delete(path, messageHandler);
	}

	internsApp.Create = fnCreate;
	internsApp.Read	= fnRead;
	internsApp.Update = fnUpdate;
	internsApp.Delete = fnDelete;

	internsApp.logOut = logOut;
})()
