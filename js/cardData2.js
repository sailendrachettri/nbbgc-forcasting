const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ae0cc1874emshef71295615a96cdp1138fcjsnc123ec78923c',
        'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=`Amaravati`&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity1.innerHTML = response.current_observation.atmosphere.humidity
        sunrise1.innerHTML = response.current_observation.astronomy.sunrise
        sunset1.innerHTML = response.current_observation.astronomy.sunset
        temp1.innerHTML = temp
        wind_speed1.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));


fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Itanagar&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity2.innerHTML = response.current_observation.atmosphere.humidity
        sunrise2.innerHTML = response.current_observation.astronomy.sunrise
        sunset2.innerHTML = response.current_observation.astronomy.sunset
        temp2.innerHTML = temp
        wind_speed2.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));


fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=assam&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity3.innerHTML = response.current_observation.atmosphere.humidity
        sunrise3.innerHTML = response.current_observation.astronomy.sunrise
        sunset3.innerHTML = response.current_observation.astronomy.sunset
        temp3.innerHTML = temp
        wind_speed3.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Bihar&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity4.innerHTML = response.current_observation.atmosphere.humidity
        sunrise4.innerHTML = response.current_observation.astronomy.sunrise
        sunset4.innerHTML = response.current_observation.astronomy.sunset
        temp4.innerHTML = temp
        wind_speed4.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Chhattisgarh&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity5.innerHTML = response.current_observation.atmosphere.humidity
        sunrise5.innerHTML = response.current_observation.astronomy.sunrise
        sunset5.innerHTML = response.current_observation.astronomy.sunset
        temp5.innerHTML = temp
        wind_speed5.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Goa&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity6.innerHTML = response.current_observation.atmosphere.humidity
        sunrise6.innerHTML = response.current_observation.astronomy.sunrise
        sunset6.innerHTML = response.current_observation.astronomy.sunset
        temp6.innerHTML = temp
        wind_speed6.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Gujarat&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity7.innerHTML = response.current_observation.atmosphere.humidity
        sunrise7.innerHTML = response.current_observation.astronomy.sunrise
        sunset7.innerHTML = response.current_observation.astronomy.sunset
        temp7.innerHTML = temp
        wind_speed7.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Haryana&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity8.innerHTML = response.current_observation.atmosphere.humidity
        sunrise8.innerHTML = response.current_observation.astronomy.sunrise
        sunset8.innerHTML = response.current_observation.astronomy.sunset
        temp8.innerHTML = temp
        wind_speed8.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Shimla&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity9.innerHTML = response.current_observation.atmosphere.humidity
        sunrise9.innerHTML = response.current_observation.astronomy.sunrise
        sunset9.innerHTML = response.current_observation.astronomy.sunset
        temp9.innerHTML = temp
        wind_speed9.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Jharkhand&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity10.innerHTML = response.current_observation.atmosphere.humidity
        sunrise10.innerHTML = response.current_observation.astronomy.sunrise
        sunset10.innerHTML = response.current_observation.astronomy.sunset
        temp10.innerHTML = temp
        wind_speed10.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Karnataka&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity11.innerHTML = response.current_observation.atmosphere.humidity
        sunrise11.innerHTML = response.current_observation.astronomy.sunrise
        sunset11.innerHTML = response.current_observation.astronomy.sunset
        temp11.innerHTML = temp
        wind_speed11.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Kerala&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity12.innerHTML = response.current_observation.atmosphere.humidity
        sunrise12.innerHTML = response.current_observation.astronomy.sunrise
        sunset12.innerHTML = response.current_observation.astronomy.sunset
        temp12.innerHTML = temp
        wind_speed12.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Bhopal&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity13.innerHTML = response.current_observation.atmosphere.humidity
        sunrise13.innerHTML = response.current_observation.astronomy.sunrise
        sunset13.innerHTML = response.current_observation.astronomy.sunset
        temp13.innerHTML = temp
        wind_speed13.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Maharashtra&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity14.innerHTML = response.current_observation.atmosphere.humidity
        sunrise14.innerHTML = response.current_observation.astronomy.sunrise
        sunset14.innerHTML = response.current_observation.astronomy.sunset
        temp14.innerHTML = temp
        wind_speed14.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Manipur&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity15.innerHTML = response.current_observation.atmosphere.humidity
        sunrise15.innerHTML = response.current_observation.astronomy.sunrise
        sunset15.innerHTML = response.current_observation.astronomy.sunset
        temp15.innerHTML = temp
        wind_speed15.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Meghalaya&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity16.innerHTML = response.current_observation.atmosphere.humidity
        sunrise16.innerHTML = response.current_observation.astronomy.sunrise
        sunset16.innerHTML = response.current_observation.astronomy.sunset
        temp16.innerHTML = temp
        wind_speed16.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Mizoram&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity17.innerHTML = response.current_observation.atmosphere.humidity
        sunrise17.innerHTML = response.current_observation.astronomy.sunrise
        sunset17.innerHTML = response.current_observation.astronomy.sunset
        temp17.innerHTML = temp
        wind_speed17.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Nagaland&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity18.innerHTML = response.current_observation.atmosphere.humidity
        sunrise18.innerHTML = response.current_observation.astronomy.sunrise
        sunset18.innerHTML = response.current_observation.astronomy.sunset
        temp18.innerHTML = temp
        wind_speed18.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Odisha&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity19.innerHTML = response.current_observation.atmosphere.humidity
        sunrise19.innerHTML = response.current_observation.astronomy.sunrise
        sunset19.innerHTML = response.current_observation.astronomy.sunset
        temp19.innerHTML = temp
        wind_speed19.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Punjab&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity20.innerHTML = response.current_observation.atmosphere.humidity
        sunrise20.innerHTML = response.current_observation.astronomy.sunrise
        sunset20.innerHTML = response.current_observation.astronomy.sunset
        temp20.innerHTML = temp
        wind_speed20.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Rajasthan&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity21.innerHTML = response.current_observation.atmosphere.humidity
        sunrise21.innerHTML = response.current_observation.astronomy.sunrise
        sunset21.innerHTML = response.current_observation.astronomy.sunset
        temp21.innerHTML = temp
        wind_speed21.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Sikkim&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity22.innerHTML = response.current_observation.atmosphere.humidity
        sunrise22.innerHTML = response.current_observation.astronomy.sunrise
        sunset22.innerHTML = response.current_observation.astronomy.sunset
        temp22.innerHTML = temp
        wind_speed22.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Chennai&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity23.innerHTML = response.current_observation.atmosphere.humidity
        sunrise23.innerHTML = response.current_observation.astronomy.sunrise
        sunset23.innerHTML = response.current_observation.astronomy.sunset
        temp23.innerHTML = temp
        wind_speed23.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Telangana&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity24.innerHTML = response.current_observation.atmosphere.humidity
        sunrise24.innerHTML = response.current_observation.astronomy.sunrise
        sunset24.innerHTML = response.current_observation.astronomy.sunset
        temp24.innerHTML = temp
        wind_speed24.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Tripura&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity25.innerHTML = response.current_observation.atmosphere.humidity
        sunrise25.innerHTML = response.current_observation.astronomy.sunrise
        sunset25.innerHTML = response.current_observation.astronomy.sunset
        temp25.innerHTML = temp
        wind_speed25.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Lucknow&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity26.innerHTML = response.current_observation.atmosphere.humidity
        sunrise26.innerHTML = response.current_observation.astronomy.sunrise
        sunset26.innerHTML = response.current_observation.astronomy.sunset
        temp26.innerHTML = temp
        wind_speed26.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Uttarakhand&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity27.innerHTML = response.current_observation.atmosphere.humidity
        sunrise27.innerHTML = response.current_observation.astronomy.sunrise
        sunset27.innerHTML = response.current_observation.astronomy.sunset
        temp27.innerHTML = temp
        wind_speed27.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=Kolkata&format=json&u=f', options)
    .then(response => response.json())
    .then(response => {

        let tempInFahrenheit = response.current_observation.condition.temperature;
        let temp = Math.ceil((tempInFahrenheit - 32.0) * 5.0 / 9.0);

        humidity28.innerHTML = response.current_observation.atmosphere.humidity
        sunrise28.innerHTML = response.current_observation.astronomy.sunrise
        sunset28.innerHTML = response.current_observation.astronomy.sunset
        temp28.innerHTML = temp
        wind_speed28.innerHTML = response.current_observation.wind.speed
    })
    .catch(err => console.error(err));
