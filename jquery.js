$(document).ready(function() {

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
	'September', 'October', 'November', 'December'];
	let timer = 1000;

	for (let i = 0; i < months.length; i++) {

		setTimeout(function() {
			let item = document.createElement('li');
			item.innerHTML = months[i];

			$("#monthsList").append(item);
		}, timer);

		timer += 1000;
	}

	setTimeout(function(){
		$('li:odd').css('color','red');
	}, timer - 1000);
});