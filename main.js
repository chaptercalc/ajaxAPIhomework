/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

// HOMEWORK

// add handle bars to your this site. compete this assignement. comment the code. (do this over the weekend)
// find a differrent endpoint and ping that. 
// go to another end point. 16 day daily forecast. 
// go to twitter get their API. 
// go to instagram. 
// create an input field in the DOM so a user can search dynamic. 

(function() {

  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "810932af7c62935109c4ecafd3fc4738";
  var $CityButton = $('#CityButton');
  var $UserCity = $('#UserCity');
  var $sixteen = $('#sixteen');

//   	$button.on('click', function(event) {
//   	  event.preventDefault();
//   	  usercity = $('userCity').val()
//    	console.log(usercity);
// });

$CityButton.on('click', function (event) {
event.preventDefault();
$UserCity = $('#UserCity').val();

$.ajax({
	url: weatherUrl + $UserCity + '?' + '&APPID=' + apiKey,
	type: 'GET',
	success: function (response) {
		var sunset = (response.sys.sunset);
		var sunrise = (response.sys.sunrise);

		var dateSet = new Date(sunset * 1000)
		var dateSun = new Date(sunrise * 1000)

		var timestrSet = dateSet.toLocaleTimeString();
		var timestrSun = dateSun.toLocaleTimeString();

			//console.log('Sunset: ' + dateSet, timestrSet);
			//console.log('Sunrise: ' + dateSun, timestrSun);


			var $newp = $('<p></p>')
			var $newp2 = $('<p></p>')

			$newp.html('Sunset: ' + $UserCity + ' ' + dateSet);
			$('body').append($newp);

			$newp2.html('Sunrise: ' + $UserCity + ' ' + dateSun);
			$('body').append($newp2);


	},
	error: function () {
		console.error("error")
	}

})

});

$sixteen.on('click', function (event) {
	  event.preventDefault();

  var weatherUrl2 = "http://api.openweathermap.org/data/2.5/forecast/daily?q=SantaMonica&mode=json&units=metric&cnt=7";
  var apiKey = "810932af7c62935109c4ecafd3fc4738";

  $.ajax({
  	url: weatherUrl2 + '&APPID=' + apiKey,
  	type: 'GET',
  	success: function (response){
  		for(i=0; i < response.list.length; i++){

  			console.log(response.list[i]);
  		}

  	},
  	error: function () {
  		console.error('error')
  	}

  })

 });



})();



