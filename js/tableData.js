const op = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87c05fdb63mshc6f545102925a69p1efaafjsn5fd53b3d0c9f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// api alternative 1: 31969a1614msh88ac34bc8e6c48bp1b89e5jsn30b700019bd0
// api alternative 2: 5400ec26admsh5e70570b1dfb135p102582jsn68b10227f109
// api alternative 3: 87c05fdb63mshc6f545102925a69p1efaafjsn5fd53b3d0c9f
// api alternative 4: 8eb942e62fmshb1157e8fb54e693p1580e5jsn94ed81c94ed3
// api alternative 5: ae0cc1874emshef71295615a96cdp1138fcjsnc123ec78923c
// api alternative 6: 00e4ec9c88msh21915edc8bef683p1e99b8jsne24b1ecc0ebe
// api alternative 7: c78fb667a3msh7d7e2fb02212684p19c0a3jsn6c1847f46e85
// api ninjs - GGX8hA4PFKTlXOlNuu6kyw==6tVGGxtqLVCe6rg8




// __________________________________LOCATION INFO FOR SEARCH QUERYES STARTED____________________________________
const weatherInfo = (location) => {
	cityName.innerHTML = location.toUpperCase();

	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${location}`, op)
		.then(response => response.json())
		.then((response) => {

			searchCityTemp.innerHTML = response.temp
			searchCityMax_temp.innerHTML = response.max_temp
			searchCityMin_temp.innerHTML = response.min_temp
			searchCityWind_speed.innerHTML = response.wind_speed
			searchCityHumidity.innerHTML = response.humidity


			//    console.log(response)
		})
		.catch(err => console.error(err));
}

submitLocationBtn.addEventListener('click', (e) => {
	e.preventDefault(); // prevents from reloading webpage
	// if user submit empty field then the location will be "Gangtok" by default
	weatherInfo((searchBox.value == "") ? "Gangtok" : searchBox.value); // just a if-else in one line

	searchBox.value = "";  //   optional fearure
});

weatherInfo("Gangtok");

// __________________________________LOCATION INFO FOR SEARCH QUERYES STARTED____________________________________

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pakyong', op)
	.then(response => response.json())
	.then((response) => {

		pakyongTemp.innerHTML = response.temp
		pakyongMax_temp.innerHTML = response.max_temp
		pakyongMin_temp.innerHTML = response.min_temp
		pakyongWind_speed.innerHTML = response.wind_speed
		pakyongHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Namchi', op)
	.then(response => response.json())
	.then((response) => {

		namchiTemp.innerHTML = response.temp
		namchiMax_temp.innerHTML = response.max_temp
		namchiMin_temp.innerHTML = response.min_temp
		namchiWind_speed.innerHTML = response.wind_speed
		namchiHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mangan', op)
	.then(response => response.json())
	.then((response) => {

		manganTemp.innerHTML = response.temp
		manganMax_temp.innerHTML = response.max_temp
		manganMin_temp.innerHTML = response.min_temp
		manganWind_speed.innerHTML = response.wind_speed
		manganHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Singtam', op)
	.then(response => response.json())
	.then((response) => {

		singtamTemp.innerHTML = response.temp
		singtamMax_temp.innerHTML = response.max_temp
		singtamMin_temp.innerHTML = response.min_temp
		singtamWind_speed.innerHTML = response.wind_speed
		singtamHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jorethang', op)
	.then(response => response.json())
	.then((response) => {

		jorethangTemp.innerHTML = response.temp
		jorethangMax_temp.innerHTML = response.max_temp
		jorethangMin_temp.innerHTML = response.min_temp
		jorethangWind_speed.innerHTML = response.wind_speed
		jorethangHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rangpo', op)
	.then(response => response.json())
	.then((response) => {

		rangpoTemp.innerHTML = response.temp
		rangpoMax_temp.innerHTML = response.max_temp
		rangpoMin_temp.innerHTML = response.min_temp
		rangpoWind_speed.innerHTML = response.wind_speed
		rangpoHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Soreng', op)
	.then(response => response.json())
	.then((response) => {

		sorengTemp.innerHTML = response.temp
		sorengMax_temp.innerHTML = response.max_temp
		sorengMin_temp.innerHTML = response.min_temp
		sorengWind_speed.innerHTML = response.wind_speed
		sorengHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pelling', op)
	.then(response => response.json())
	.then((response) => {

		pellingTemp.innerHTML = response.temp
		pellingMax_temp.innerHTML = response.max_temp
		pellingMin_temp.innerHTML = response.min_temp
		pellingWind_speed.innerHTML = response.wind_speed
		pellingHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Yanyang', op)
	.then(response => response.json())
	.then((response) => {

		yanyangTemp.innerHTML = response.temp
		yanyangMax_temp.innerHTML = response.max_temp
		yanyangMin_temp.innerHTML = response.min_temp
		yanyangWind_speed.innerHTML = response.wind_speed
		yanyangHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melli', op)
	.then(response => response.json())
	.then((response) => {

		melliTemp.innerHTML = response.temp
		melliMax_temp.innerHTML = response.max_temp
		melliMin_temp.innerHTML = response.min_temp
		melliWind_speed.innerHTML = response.wind_speed
		melliHumidity.innerHTML = response.humidity


		//    console.log(response)
	})
	.catch(err => console.error(err));