var S = function() {
	const clap = document.querySelector(".note[data-key='65']"),
		hihat = document.querySelector(".note[data-key='83']"),
		kick = document.querySelector(".note[data-key='68']"),
		openhat = document.querySelector(".note[data-key='70']"),
		boom = document.querySelector(".note[data-key='71']"),
		ride = document.querySelector(".note[data-key='72']"),
		snare = document.querySelector(".note[data-key='74']"),
		tom = document.querySelector(".note[data-key='75']"),
		tink = document.querySelector(".note[data-key='76']");

	var b = setInterval(function() {
		snare.click();
	}, 250);

	var b1 = setTimeout(function(){
		setInterval(function() {
			boom.click()
		}, 1000)
	}, 1250)

	var b2 = setInterval(function() {
		boom.click();
	}, 1000);

	var b3 = setTimeout(function(){
			setInterval(function() {
			clap.click();
		}, 1000)
	}, 750);	

};