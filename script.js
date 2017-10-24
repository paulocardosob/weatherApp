(function (){

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(getResponse);

    } else {
        console.log("Sem localizacao");
    }

    function getResponse(position) {
        let url = 'https://fcc-weather-api.glitch.me/api/current?lat='+position.coords.latitude+'&lon='+position.coords.longitude;
        
        fetch(url)
            .then(resp => resp.json())
            .then(function(data){

                let response = {};

                response.city = data.name;
                response.country = data.sys.country;
                response.temp = data.main.temp;
                response.minTemp = data.main.temp_min;
                response.maxTemp = data.main.temp_max;
                response.main = data.weather[0].main;
                response.icon = data.weather[0].icon;

                displayWeather(response);
                
            });
             
    }

    function displayWeather(res) {
        document.getElementById("city").innerHTML = res.city;
        document.getElementById("country").innerHTML = res.country;
        document.getElementById("temperatura").innerHTML = res.temp;
        document.getElementById("sky").innerHTML = res.main;
    }

})();