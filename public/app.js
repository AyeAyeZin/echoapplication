fb = {};
fb = firebase;

function fnCreate(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).set(body, callBack);
}

function fnRead(path, successFunction, errorFunction){
	if(!path || !successFunction || !errorFunction) return;
	fb.database().ref(path).once('value').then(successFunction, errorFunction);
}

 function fnCreate(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).set(body, callBack);
}

function fnCreate(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).set(body, callBack);
}


function fnUpdate(path, body, callBack){
	if(!path || !body) return;
	fb.database().ref(path).update(body, callBack);
}

function fnDelete(path, callBack){
	if(!path) return;
	fb.database().ref(path).remove(callBack);
}


fb.data = {
	create: fnCreate,
	read: fnRead,
	update: fnUpdate,
	delete: fnDelete
}
