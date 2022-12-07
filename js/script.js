const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '31969a1614msh88ac34bc8e6c48bp1b89e5jsn30b700019bd0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log("Hello World");