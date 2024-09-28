const btn = document.querySelector('button');
const html = document.querySelector('html');

let currentModeIsLight = html.className;

function setThemeDark() {
	html.classList.remove('light');
	html.classList.add('dark');
	btn.classList.add('animate-toRight');
	localStorage.setItem('@toggle-dark-mode:theme', 'dark');
}

function setThemeLight() {
	html.classList.remove('dark');
	html.classList.add('light');
	btn.classList.add('animate-toLeft');
	localStorage.setItem('@toggle-dark-mode:theme', 'light');
}

function toggleDarkMode() {
	const audioClick = new Audio('./src/audio/click.mp3');
	btn.classList.remove('animate-toRight', 'animate-toLeft', 'bg-moon', 'bg-sun', 'dark:ml-auto');

	audioClick.play();

	if(currentModeIsLight === 'light') {
		setThemeDark();
		currentModeIsLight = 'dark';

		return
	}

	setThemeLight();
	currentModeIsLight = 'light';
}


btn.addEventListener('click', toggleDarkMode);
