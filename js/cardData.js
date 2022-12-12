const options = {
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


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Andhra Pradesh', options)
	.then(response => response.json())
	.then((response) => {

		humidity1.innerHTML = response.humidity
		max_temp1.innerHTML = response.max_temp
		min_temp1.innerHTML = response.min_temp
		temp1.innerHTML = response.temp
		wind_speed1.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Arunachal Pradesh', options)
	.then(response => response.json())
	.then((response) => {

		humidity2.innerHTML = response.humidity
		max_temp2.innerHTML = response.max_temp
		min_temp2.innerHTML = response.min_temp
		temp2.innerHTML = response.temp
		wind_speed2.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Assam', options)
	.then(response => response.json())
	.then((response) => {

		humidity3.innerHTML = response.humidity
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		temp3.innerHTML = response.temp
		wind_speed3.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bihar', options)
	.then(response => response.json())
	.then((response) => {

		humidity4.innerHTML = response.humidity
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		temp4.innerHTML = response.temp
		wind_speed4.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chhattisgarh', options)
	.then(response => response.json())
	.then((response) => {

		humidity5.innerHTML = response.humidity
		max_temp5.innerHTML = response.max_temp
		min_temp5.innerHTML = response.min_temp
		temp5.innerHTML = response.temp
		wind_speed5.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Goa', options)
	.then(response => response.json())
	.then((response) => {

		humidity6.innerHTML = response.humidity
		max_temp6.innerHTML = response.max_temp
		min_temp6.innerHTML = response.min_temp
		temp6.innerHTML = response.temp
		wind_speed6.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gujarat', options)
	.then(response => response.json())
	.then((response) => {

		humidity7.innerHTML = response.humidity
		max_temp7.innerHTML = response.max_temp
		min_temp7.innerHTML = response.min_temp
		temp7.innerHTML = response.temp
		wind_speed7.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana', options)
	.then(response => response.json())
	.then((response) => {

		humidity8.innerHTML = response.humidity
		max_temp8.innerHTML = response.max_temp
		min_temp8.innerHTML = response.min_temp
		temp8.innerHTML = response.temp
		wind_speed8.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Himachal Pradesh', options)
	.then(response => response.json())
	.then((response) => {

		humidity9.innerHTML = response.humidity
		max_temp9.innerHTML = response.max_temp
		min_temp9.innerHTML = response.min_temp
		temp9.innerHTML = response.temp
		wind_speed9.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jharkhand', options)
	.then(response => response.json())
	.then((response) => {

		humidity10.innerHTML = response.humidity
		max_temp10.innerHTML = response.max_temp
		min_temp10.innerHTML = response.min_temp
		temp10.innerHTML = response.temp
		wind_speed10.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karnataka', options)
	.then(response => response.json())
	.then((response) => {

		humidity11.innerHTML = response.humidity
		max_temp11.innerHTML = response.max_temp
		min_temp11.innerHTML = response.min_temp
		temp11.innerHTML = response.temp
		wind_speed11.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kerala', options)
	.then(response => response.json())
	.then((response) => {

		humidity12.innerHTML = response.humidity
		max_temp12.innerHTML = response.max_temp
		min_temp12.innerHTML = response.min_temp
		temp12.innerHTML = response.temp
		wind_speed12.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Madhya Pradesh', options)
	.then(response => response.json())
	.then((response) => {

		humidity13.innerHTML = response.humidity
		max_temp13.innerHTML = response.max_temp
		min_temp13.innerHTML = response.min_temp
		temp13.innerHTML = response.temp
		wind_speed13.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Maharashtra', options)
	.then(response => response.json())
	.then((response) => {

		humidity14.innerHTML = response.humidity
		max_temp14.innerHTML = response.max_temp
		min_temp14.innerHTML = response.min_temp
		temp14.innerHTML = response.temp
		wind_speed14.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Manipur', options)
	.then(response => response.json())
	.then((response) => {

		humidity15.innerHTML = response.humidity
		max_temp15.innerHTML = response.max_temp
		min_temp15.innerHTML = response.min_temp
		temp15.innerHTML = response.temp
		wind_speed15.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Meghalaya', options)
	.then(response => response.json())
	.then((response) => {

		humidity16.innerHTML = response.humidity
		max_temp16.innerHTML = response.max_temp
		min_temp16.innerHTML = response.min_temp
		temp16.innerHTML = response.temp
		wind_speed16.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mizoram', options)
	.then(response => response.json())
	.then((response) => {

		humidity17.innerHTML = response.humidity
		max_temp17.innerHTML = response.max_temp
		min_temp17.innerHTML = response.min_temp
		temp17.innerHTML = response.temp
		wind_speed17.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagaland', options)
	.then(response => response.json())
	.then((response) => {

		humidity18.innerHTML = response.humidity
		max_temp18.innerHTML = response.max_temp
		min_temp18.innerHTML = response.min_temp
		temp18.innerHTML = response.temp
		wind_speed18.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Odisha', options)
	.then(response => response.json())
	.then((response) => {

		humidity19.innerHTML = response.humidity
		max_temp19.innerHTML = response.max_temp
		min_temp19.innerHTML = response.min_temp
		temp19.innerHTML = response.temp
		wind_speed19.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Punjab', options)
	.then(response => response.json())
	.then((response) => {

		humidity20.innerHTML = response.humidity
		max_temp20.innerHTML = response.max_temp
		min_temp20.innerHTML = response.min_temp
		temp20.innerHTML = response.temp
		wind_speed20.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Rajasthan', options)
	.then(response => response.json())
	.then((response) => {

		humidity21.innerHTML = response.humidity
		max_temp21.innerHTML = response.max_temp
		min_temp21.innerHTML = response.min_temp
		temp21.innerHTML = response.temp
		wind_speed21.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sikkim', options)
	.then(response => response.json())
	.then((response) => {

		humidity22.innerHTML = response.humidity
		max_temp22.innerHTML = response.max_temp
		min_temp22.innerHTML = response.min_temp
		temp22.innerHTML = response.temp
		wind_speed22.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tamil Nadu', options)
	.then(response => response.json())
	.then((response) => {

		humidity23.innerHTML = response.humidity
		max_temp23.innerHTML = response.max_temp
		min_temp23.innerHTML = response.min_temp
		temp23.innerHTML = response.temp
		wind_speed23.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then((response) => {

		humidity24.innerHTML = response.humidity
		max_temp24.innerHTML = response.max_temp
		min_temp24.innerHTML = response.min_temp
		temp24.innerHTML = response.temp
		wind_speed24.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tripura', options)
	.then(response => response.json())
	.then((response) => {

		humidity25.innerHTML = response.humidity
		max_temp25.innerHTML = response.max_temp
		min_temp25.innerHTML = response.min_temp
		temp25.innerHTML = response.temp
		wind_speed25.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uttar Pradesh', options)
	.then(response => response.json())
	.then((response) => {

		humidity26.innerHTML = response.humidity
		max_temp26.innerHTML = response.max_temp
		min_temp26.innerHTML = response.min_temp
		temp26.innerHTML = response.temp
		wind_speed26.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uttarakhand', options)
	.then(response => response.json())
	.then((response) => {

		humidity27.innerHTML = response.humidity
		max_temp27.innerHTML = response.max_temp
		min_temp27.innerHTML = response.min_temp
		temp27.innerHTML = response.temp
		wind_speed27.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=West Bengal', options)
	.then(response => response.json())
	.then((response) => {

		humidity28.innerHTML = response.humidity
		max_temp28.innerHTML = response.max_temp
		min_temp28.innerHTML = response.min_temp
		temp28.innerHTML = response.temp
		wind_speed28.innerHTML = response.wind_speed


		//    console.log(response)
	})
.catch(err => console.error(err));

