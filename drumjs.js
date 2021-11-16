// Button functions

$(function() {
	$("#item").click(function() {
			$("#submenu").slideToggle(500);
	});
});

// Keystroke for drumpad
function removeTransition(e) {
if (e.propertyName !== 'transform') return;
e.target.classList.remove('playing');
}
function playSound(e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const pad = document.querySelector(`div[data-key="${e.keyCode}"]`);
if (!audio) return;
pad.classList.add('playing');
audio.currentTime = 0;
audio.play();
}
const pads = Array.from(document.querySelectorAll('.pad'));
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

/*
$(function() {
	$(document).keypress(function(event) {
		switch(event.which) {
			case 81:
			$("#Kick").trigger("click")
			break;
		}

		if(event.keycode === 69) {
			$("#Chords").click();
		}	
	});
});


// Get the input field
document.getElementById('btn').onclick=function() {
	document.getElementById('audio').play();
}

// Execute a function when the user releases a key on the keyboard
document.addEventListener('keydown', function(event) {
  // Cancel the default action, if needed
  //event.preventDefault();
  if (event.keyCode == 81) {
    // Trigger the button element with a click
    document.getElementById('audio').play();
  }
}); 

*/



