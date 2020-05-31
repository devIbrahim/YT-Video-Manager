const form = document.querySelector('.add-vid-form');

form.addEventListener('submit', event => {
 
	event.preventDefault();

	const vidName = document.querySelector('.vid-name').value.trim();
	const vidURL = document.querySelector('.vid-url').value.trim();

	const video = {
		name: document.querySelector('.vid-name').value.trim(),
		url: document.querySelector('.vid-url').value.trim()
	}

	console.log(video);
	form.reset();

	const randomID = Math.floor(Math.random() * 999999999999)
	localStorage.setItem(randomID, video);

})









