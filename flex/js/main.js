window.onload = function(){
	var title = document.getElementById('page').querySelector('h1');
	console.info(title.innerHTML);
	title.innerHTML = 'Hello';
	console.info(title.innerHTML);

/*setTimeout(function(){
	console.info('title change')
	title.style.backgroundColor = 'blue';
}, 2000);
*/
	setInterval(changeColor, 1000);
	title.style.backgroundColor = 'blue';

	function changeColor(){
		if (title.style.backgroundColor === 'blue') {
         title.style.backgroundColor = 'red';
         } else{
         title.style.backgroundColor = 'blue';
		}
	}
}