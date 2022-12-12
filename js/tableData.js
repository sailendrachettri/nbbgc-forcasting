const op = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8eb942e62fmshb1157e8fb54e693p1580e5jsn94ed81c94ed3',
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


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gangtok', op)
	.then(response => response.json())
	.then((response) => {

		gangtokHumidity.innerHTML = response.humidity
		gangtokMax_temp.innerHTML = response.max_temp
		gangtokMin_temp.innerHTML = response.min_temp
		gangtokTemp.innerHTML = response.temp
		gangtokWind_speed.innerHTML = response.wind_speed


		   console.log(response)
	})
.catch(err => console.error(err));

// ____________________________________TABLE DATA STARTED____________________________________ 

// let locationName = document.getElementById("searchBox").value;
// console.log(locationName);

// ____________________________________TABLE DATA ENDED________________________________
