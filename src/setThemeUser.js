function setThemeUser() {
	const browserTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
	const themeExistsInLocalStorage = localStorage.getItem('@toggle-dark-mode:theme');
	const preferredTheme = themeExistsInLocalStorage ? themeExistsInLocalStorage : browserTheme;

	document.documentElement.classList.add(preferredTheme);
}

setThemeUser();