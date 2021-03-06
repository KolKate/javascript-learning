function Data() {
	this.createData = function(key, data) {
		
		// if false, null, undefined - prompt
		key = key || prompt('Key');
		data = data || prompt('Data');

		if (!key || key === '') {
			console.error('No key');
			return false;
		}

		if (!data) {
			console.error('No data');
			return false;
		}

		localStorage.setItem (key, data);
	}

	this.getData = function (key) {
		var data = localStorage.getItem(key);
		return data;
	}
	this.updateData = function (key, data){
		
		if(localStorage.getItem(key) === null){
		console.error('No key');
		return false;
		}else{
		localStorage.setItem(key, data);
		}
	}

	this.deleteData = function(key){
		localStorage.removeItem(key);
	}
}

function Markup(){

	this.createMarkup = function(tag, content){
	  var element = document.createElement(tag);
	  element.id = 'id' + new Date().getTime();
	  element.innerHTML = content; 
	  document.body.appendChild(element);    //crtate on the page. appendChild - creat a new element.(или подставляет под созданный элементю в нашем случае т.к. мы работаем с body - в низ добавляет)
	  return element.id; 
	}

	this.updateMarkupById = function(id, content){
		var element = document.getElementById(id);
		element.innerHTML = content; 
	}

	this.deleteMarkupById = function(id){
		var element = document.getElementById(id);
		element.parentNode.removeChild(element);
	}

}

function Logs(){
	this.l = function(messages){
		if(messages instanceof Array){
			for(var i = 0; i<messages.length; i++){
				console.log(messages[i]);
			}
		}else{console.log(messages);}
	}
	this.i = function(messages){
		if(messages instanceof Array){
			for(var i = 0; i<messages.length; i++){
				console.info(messages[i]);
			}
		}else{console.info(messages);}
	}
	this.w = function(messages){
		if(messages instanceof Array){
			for(var i = 0; i<messages.length; i++){
				console.warn(messages[i]);
			}
		}else{console.warn(messages);}
	}
	this.e = function(messages){
		if(messages instanceof Array){
			for(var i = 0; i<messages.length; i++){
				console.error(messages[i]);
			}
		}else{console.error(messages);}
	}
	this.ts = function(name){
		console.time(name);
	}
	this.te = function(name){
		console.timeEnd(name);

	}
}

var data = new Data();
var markup = new Markup();
var log = new Logs();
