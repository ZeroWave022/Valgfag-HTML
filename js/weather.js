//Get the image and weather description from the HTML document.
var img = document.getElementById('weathericon');
var description = document.getElementById('weatherdescription');

$(document).ready(() => {
    //Use get function from jQuery
    $.get("https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=59.89&lon=10.52", function(data) {
        //Change image src to the link from MET with the icon, insert icon name from the data we requested.
        img.src = `https://api.met.no/images/weathericons/png/${data['properties']['timeseries'][0]['data']['next_1_hours']['summary']['symbol_code']}.png`;

        //Add the temperature to the description in HTML.
        //Use the += operator instead of = to avoid removing existing content.
        description.innerHTML += data['properties']['timeseries'][0]['data']['instant']['details']['air_temperature'] + ' °C';
    });
});
