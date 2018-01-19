"use strict";

var Drum = (function() {
	const keys = document.querySelectorAll(".note");
	let notes = document.getElementsByClassName("note"),
		keyCodes = [];

	for (var i=0; i < notes.length; i++) {
		notes[i].addEventListener("click", function(e){
			animateDiv(this.dataset.key);
			playNote(this.dataset.key);
		});

		keyCodes.push(notes[i].dataset.key);
	}

	document.addEventListener('keydown', function(e) {
		if (keyCodes.indexOf(e.keyCode.toString()) != -1) {
			animateDiv(e.keyCode)
			playNote(e.keyCode);
		} else {
			return null;
		}
	});

	keys.forEach(function(key) {
		key.addEventListener("transitionend", removeTransition);
	});	

	var animateDiv = function(div) {
		var button = document.querySelector(`div[data-key="${div}"]`);
		button.classList.add("playing");
	}

	var playNote = function(note) {
		var sound = document.querySelector(`audio[data-key="${note}"]`);
		sound.currentTime = 0;
		sound.play();
	}

	function removeTransition(e){
		if (e.propertyName != "transform") return;
		this.classList.remove("playing");
	}
})();