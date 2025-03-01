document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

document.querySelectorAll("nav-item").forEach(item => {
	item.addEventListener("mouseover", () => {
		let audio = document.getElementById("hover-sound");
		audio.currentTime = 0; 
		audio.play();
	});
});
