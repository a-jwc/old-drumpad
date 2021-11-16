// Drumpad
function removeTransition(e) {
	if (e.propertyName !== 'transform') 
		return;
	e.target.classList.remove('playing');
}
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const pad = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) 
		return;
	pad.classList.add('playing');
	audio.currentTime = 0;
	audio.play();
}
const pads = Array.from(document.querySelectorAll('.pad'));
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

e = document.goetElementById("hit");
e.addEventListener("keydown",function(event) {
	event.preventDefault;
	element.classList.remove("playing");
	void element.offsetWidth;
	element.classList.add("playing");
} ,false);
/*
function animatePad() {
	document.body.removeChild(hit);
	document.body.appendChild(hit);
	hit.style.animation="hit 0.1s ease-in-out 0s";
}*/