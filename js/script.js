let darkTheme = true

document.querySelector('#themeChanger').addEventListener('click', () => {
	darkTheme = !darkTheme

	let new_background_color
	let new_font_color

	if (!darkTheme) {
		new_background_color = getComputedStyle(document.body).getPropertyValue(
			'--background_white'
		)
		new_font_color = getComputedStyle(document.body).getPropertyValue(
			'--font_black'
		)

		document
			.querySelector('#themeChanger .theme-changer-container .sun')
			.classList.add('hidden')
		document
			.querySelector('#themeChanger .theme-changer-container .moon')
			.classList.remove('hidden')
	} else {
		new_background_color = getComputedStyle(document.body).getPropertyValue(
			'--background_black'
		)
		new_font_color = getComputedStyle(document.body).getPropertyValue(
			'--font_white'
		)

		document
			.querySelector('#themeChanger .theme-changer-container .sun')
			.classList.remove('hidden')
		document
			.querySelector('#themeChanger .theme-changer-container .moon')
			.classList.add('hidden')
	}

	document.documentElement.style.setProperty(
		'--background-color',
		new_background_color
	)
	document.documentElement.style.setProperty('--font-color', new_font_color)
})
