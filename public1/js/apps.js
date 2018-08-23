fb = {};
fb = firebase;

function fnRead(path, successFunction, errorFunction){
		if(!path || !successFunction || !errorFunction) return;
		fb.database().ref(path).once('value').then(successFunction, errorFunction);
}
//fb.data={read=fnRead}