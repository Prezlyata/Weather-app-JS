window.addEventListener('load', () => {
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationTimezone = document.querySelector('.location-timezone');
	let temperatureSection = document.querySelector('.temperature');
	const temperatureSpan = document.querySelector('.temperature span');
	let daysOfWeek = document.querySelector('.day');

	let temperatureDegree1Max = document.querySelector('.temperature-degree1Max');
	let temperatureDegree2Max = document.querySelector('.temperature-degree2Max');
	let temperatureDegree3Max = document.querySelector('.temperature-degree3Max');
	let temperatureDegree4Max = document.querySelector('.temperature-degree4Max');
	let temperatureDegree5Max = document.querySelector('.temperature-degree5Max');
	let temperatureDegree6Max = document.querySelector('.temperature-degree6Max');
	let temperatureDegree7Max = document.querySelector('.temperature-degree7Max');

	let temperatureDegree1Min = document.querySelector('.temperature-degree1Min');
	let temperatureDegree2Min = document.querySelector('.temperature-degree2Min');
	let temperatureDegree3Min = document.querySelector('.temperature-degree3Min');
	let temperatureDegree4Min = document.querySelector('.temperature-degree4Min');
	let temperatureDegree5Min = document.querySelector('.temperature-degree5Min');
	let temperatureDegree6Min = document.querySelector('.temperature-degree6Min');
	let temperatureDegree7Min = document.querySelector('.temperature-degree7Min');

	let day = new Date();
	let weekday = new Array(7);
	weekday[0] = 'Sunday';
	weekday[1] = 'Monday';
	weekday[2] = 'Tuesday';
	weekday[3] = 'Wednesday';
	weekday[4] = 'Thursday';
	weekday[5] = 'Friday';
	weekday[6] = 'Saturday';
	daysOfWeek.textContent = weekday[day.getDay()];

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
				.then((dataapi) => {
					console.log(dataapi);
					const { temperature, summary, icon } = dataapi.currently;

					temperatureDegree.textContent = temperature;
					temperatureDescription.textContent = summary;

					// locationTimezone.textContent = dataapi.timezone;
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

					// const { temperature, summary, icon } = dataapi.daily.data;

					//
					setIcon2(dataapi.daily.data[0].icon, document.getElementById('icon1'));
					setIcon2(dataapi.daily.data[1].icon, document.getElementById('icon2'));
					setIcon2(dataapi.daily.data[2].icon, document.getElementById('icon3'));
					setIcon2(dataapi.daily.data[3].icon, document.getElementById('icon4'));
					setIcon2(dataapi.daily.data[4].icon, document.getElementById('icon5'));
					setIcon2(dataapi.daily.data[5].icon, document.getElementById('icon6'));
					setIcon2(dataapi.daily.data[6].icon, document.getElementById('icon7'));

					//temperature Max
					temperatureDegree1Max.textContent = dataapi.daily.data[0].temperatureMax;
					temperatureDegree2Max.textContent = dataapi.daily.data[1].temperatureMax;
					temperatureDegree3Max.textContent = dataapi.daily.data[2].temperatureMax;
					temperatureDegree4Max.textContent = dataapi.daily.data[3].temperatureMax;
					temperatureDegree5Max.textContent = dataapi.daily.data[4].temperatureMax;
					temperatureDegree6Max.textContent = dataapi.daily.data[5].temperatureMax;
					temperatureDegree7Max.textContent = dataapi.daily.data[6].temperatureMax;

					let celsius1Max = (temperatureDegree1Max.textContent - 32) * (5 / 9);
					let celsius2Max = (temperatureDegree2Max.textContent - 32) * (5 / 9);
					let celsius3Max = (temperatureDegree3Max.textContent - 32) * (5 / 9);
					let celsius4Max = (temperatureDegree4Max.textContent - 32) * (5 / 9);
					let celsius5Max = (temperatureDegree5Max.textContent - 32) * (5 / 9);
					let celsius6Max = (temperatureDegree6Max.textContent - 32) * (5 / 9);
					let celsius7Max = (temperatureDegree7Max.textContent - 32) * (5 / 9);

					temperatureDegree1Max.textContent = 'Max ' + Math.floor(celsius1Max) + '°';
					temperatureDegree2Max.textContent = 'Max ' + Math.floor(celsius2Max) + '°';
					temperatureDegree3Max.textContent = 'Max ' + Math.floor(celsius3Max) + '°';
					temperatureDegree4Max.textContent = 'Max ' + Math.floor(celsius4Max) + '°';
					temperatureDegree5Max.textContent = 'Max ' + Math.floor(celsius5Max) + '°';
					temperatureDegree6Max.textContent = 'Max ' + Math.floor(celsius6Max) + '°';
					temperatureDegree7Max.textContent = 'Max ' + Math.floor(celsius7Max) + '°';

					//temperature Min
					temperatureDegree1Min.textContent = dataapi.daily.data[0].temperatureMin;
					temperatureDegree2Min.textContent = dataapi.daily.data[1].temperatureMin;
					temperatureDegree3Min.textContent = dataapi.daily.data[2].temperatureMin;
					temperatureDegree4Min.textContent = dataapi.daily.data[3].temperatureMin;
					temperatureDegree5Min.textContent = dataapi.daily.data[4].temperatureMin;
					temperatureDegree6Min.textContent = dataapi.daily.data[5].temperatureMin;
					temperatureDegree7Min.textContent = dataapi.daily.data[6].temperatureMin;

					let celsius1Min = (temperatureDegree1Min.textContent - 32) * (5 / 9);
					let celsius2Min = (temperatureDegree2Min.textContent - 32) * (5 / 9);
					let celsius3Min = (temperatureDegree3Min.textContent - 32) * (5 / 9);
					let celsius4Min = (temperatureDegree4Min.textContent - 32) * (5 / 9);
					let celsius5Min = (temperatureDegree5Min.textContent - 32) * (5 / 9);
					let celsius6Min = (temperatureDegree6Min.textContent - 32) * (5 / 9);
					let celsius7Min = (temperatureDegree7Min.textContent - 32) * (5 / 9);

					temperatureDegree1Min.textContent = 'Min ' + Math.floor(celsius1Min) + '°';
					temperatureDegree2Min.textContent = 'Min ' + Math.floor(celsius2Min) + '°';
					temperatureDegree3Min.textContent = 'Min ' + Math.floor(celsius3Min) + '°';
					temperatureDegree4Min.textContent = 'Min ' + Math.floor(celsius4Min) + '°';
					temperatureDegree5Min.textContent = 'Min ' + Math.floor(celsius5Min) + '°';
					temperatureDegree6Min.textContent = 'Min ' + Math.floor(celsius6Min) + '°';
					temperatureDegree7Min.textContent = 'Min ' + Math.floor(celsius7Min) + '°';
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
	function setIcon2(icon, iconID) {
		const skycons = new Skycons({ color: 'white' });
		const currentIcon = icon.replace(/-/g, '_').toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}
});
