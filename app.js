window.addEventListener('load', () => {
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationTimezone = document.querySelector('.location-timezone');
	let temperatureSection = document.querySelector('.temperature');
	const temperatureSpan = document.querySelector('.temperature span');
	let daysOfWeek = document.querySelector('.day');

	let day = new Date();
	let weekday = new Array(7);
	weekday[0] = 'Понеділок';
	weekday[1] = 'Вівторок';
	weekday[2] = 'Середа';
	weekday[3] = 'Четвер';
	weekday[4] = "П'ятниця";
	weekday[5] = 'Субота';
	weekday[6] = 'Неділя';
	daysOfWeek.textContent = weekday[day.getDay() - 1];

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.darksky.net/forecast/4ff7f56ee69754a9d851ecdfff71327e/${lat},${long}`;

			fetch(api)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					console.log(data);
					const { temperature, summary, icon } = data.currently;

					temperatureDegree.textContent = temperature;
					temperatureDescription.textContent = summary;

					// locationTimezone.textContent = data.timezone;
					locationTimezone.textContent = 'Lviv';

					let celsius = (temperature - 32) * (5 / 9);
					temperatureDegree.textContent = Math.floor(celsius);

					setIcon(icon, document.querySelector('.icon'));

					// temperatureSection.addEventListener('click', () => {
					// 	if (temperatureSpan.textContent === 'F') {
					// 		temperatureSpan.textContent = 'C';
					// 		temperatureDegree.textContent = Math.floor(celsius);
					// 	} else {
					// 		temperatureSpan.textContent = 'F';
					// 		temperatureDegree.textContent = temperature;
					//      temperatureDegree.textContent = Math.floor(celsius);
					// 	}
					// });
				});
		});
	} else {
		h1.textContent = 'Please update your bowser';
	}

	function setIcon(icon, iconID) {
		const skycons = new Skycons({ color: 'white' });
		const currentIcon = icon.replace(/-/g, '_').toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}
});
