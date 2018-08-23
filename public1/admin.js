firebase.auth().onAuthStateChanged(function(user) { 
     if (user) { 
           // Do Nothing        
     }else{            
       // redirect to login page 
       window.location.replace("login.html") 
     }                                       
 });

function logOut(){
	firebase.auth().signOut();
}