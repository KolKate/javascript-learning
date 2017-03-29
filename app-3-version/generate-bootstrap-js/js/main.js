function Data() {

}
	Data.prototype.createData = function(key, data) {
		
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
	};

	Data.prototype.getData = function (key) {
		var data = localStorage.getItem(key);
		return data;
	};

	Data.prototype.updateData = function (key, data){
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

		if(!localStorage.getItem(key)){
		console.error('No data found');
		return false;
		}else{
		localStorage.setItem(key, data);
		}
	};

	Data.prototype.deleteData = function(key){
		key = key || prompt('Key');
		
		if (!key || key === '') {
			console.error('No key');
			return false;
		}

		if(!localStorage.getItem(key)){
		console.error('No data found');
		return false;
		}else{
		localStorage.setItem(key, data);
		}

		localStorage.removeItem(key);
	};


function Markup(){
}
	Markup.prototype.createMarkup = function(
		tag,
		content, 
		parent,
		attributes
	){
	  var element = document.createElement(tag);
	   element.innerHTML = content; 

	   if (attributes){
	  	for (var i in attributes){
	  		element[i] = attributes[i];
	  		console.log(i);
	  		// element['className'] = attributes['className'];
	  		// element['id'] = attributes['id'];
	  		//('h1', 'dddd', null, {className:'test1', id:2})
	  	}  
	  }

	  if (parent){   //  проверка есть ли парент в запросе 
	  	var prnt = document.querySelector(parent); 
	  	if(!prnt){ //элемент существует на страницу  - проверка 
	  		console.error('No element found');
	  		return false;
	  	}
	  	prnt.appendChild(element);
	  } else{
	  	document.body.appendChild(element);
	  }

	   
	};    

	
		
	Markup.prototype.updateMarkup = function(query, content){
		var elements = this.findMarkup(query);
		elements[0].innerHTML = content;
	};
	
	Markup.prototype.deleteMarkup = function(query){
		var elements = this.findMarkup(query);
		elements.remove(elements);
	};

	Markup.prototype.findMarkup = function(query){
		var elements = document.querySelector(query);
		return elements;
	};



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

window.onload = function(){
markup.createMarkup(
	'header', 
	'',
	null
	);

markup.createMarkup(
	'nav', 
	'',
	'header',
	{className: 'navbar navbar-default navbar-fixed-top'}
	);

markup.createMarkup(
	'div', 
	'',
	'nav',
	{className: 'container', id: 'div1'}
	);

markup.createMarkup(
	'div', 
	'',
	'#div1',
	{className: 'navbar-header'}
	);

markup.createMarkup(
	'a', 
	'',
	'.navbar-header',
	{className: 'navbar-brand', href: '#'}
	);

markup.createMarkup(
	'img', 
	'',
	'.navbar-brand',
	{alt: 'Brand', src: 'assets/img/pic.png'}
	);

markup.createMarkup(
	'form', 
	'',
	'#div1',
	{role: 'form', className: 'navbar-form navbar-right'}
	);

markup.createMarkup(
	'div', 
	'',
	'.navbar-form',
	{className: 'form-group', id:'email-div'}
	);

markup.createMarkup(
	'input', 
	'',
	'#email-div',
	{className: 'form-control', type: 'email', id: 'email', placeholder: 'E-mail'}
	);

markup.createMarkup(
	'div', 
	'',
	'.navbar-form',
	{className: 'form-group', id:'pasword-div'}
	);

markup.createMarkup(
	'input', 
	'',
	'#pasword-div',
	{className: 'form-control', type: 'password', id: 'pass', placeholder: 'Password'}
	);

markup.createMarkup(
	'button', 
	'Sign in',
	'.navbar-form',
	{className: 'btn btn-success', type: 'submit'}
	);

markup.createMarkup(
	'div', 
	'',
	null,
	{className: 'container', id: 'div2'}
	);

markup.createMarkup(
	'div', 
	'',
	'#div2',
	{className: 'row'}
	);

markup.createMarkup(
	'div', 
	'',
	'.row',
	{className:'col-md-2 col-sm-2'}
	);

markup.createMarkup(
	'aside', 
	'',
	'.col-md-2'
	);
markup.createMarkup(
	'ul', 
	'',
	'aside',
	{className:'nav nav-sidebar'}
	);

markup.createMarkup(
	'ul', 
	'<li><a href="#">Home</a></li>\
  	<li><a href="#">Service</a></li>\
  	<li><a href="#">Contact</a></li>',
	'aside',
	{className:'nav nav-sidebar'}
	);

markup.createMarkup(
	'div', 
	'',
	'.row',
	{className:'col-md-10 col-sm-10'}
	);

markup.createMarkup(
	'article', 
	'',
	'.col-md-10'
	);

markup.createMarkup(
	'img', 
	'',
	'article',
	{src:'assets/img/1.jpg'}
	);
markup.createMarkup(
	'p', 
	'It is a long established fact that a reader will be distracted by the readable content of a page when looking.',
	'article'
	);

markup.createMarkup(
	'footer', 
	'',
	'.col-md-10',
	{className:'footer'}
	);
markup.createMarkup(
	'p', 
	'&copy; Copyright',
	'.footer'
	);
};
