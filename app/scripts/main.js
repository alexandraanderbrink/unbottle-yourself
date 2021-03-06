(function() {

	//Fetching the endpoint value from
	//the getEndDate() function
	var endDate = getEndDate();

	//Setting the deadline variable empty
	//This will make the numbers turn 
	//into -- if the value is undefined
	var deadline = "";

	// Create a new JavaScript Date object based on the
	//unix timestamp multiplied by 1000 so that the 
	//argument is in milliseconds, not seconds.
	var deadline = new Date(endDate * 1000);

	//Running the initializeClock function
	initializeClock();

	//Get the start_date from the endpoint url
	//with a function that returns the start_date value
	//from the ajax request
	function getEndDate(url) {
		var startDate = null;
		$.ajax({
			type: 'get',
			url: "http://unbottle.getsandbox.com/campaign",
			dataType: 'json',
			contentType: "application/json",
			async: false,
			success: function(data) {
				//picking the start_date parameter
				startDate = data.start_date;
			}
		});
		return startDate;
	}

	//Calculation of the time remaining in days,
	//hours, minutes and seconds
	function getTimeRemaining(deadline){
		//Date.parse function is native JavaScript that
		//converts a time string into a value in milliseconds
		var t = Date.parse(deadline) - Date.parse(new Date());
		var seconds = Math.floor( (t/1000) % 60 );
		var minutes = Math.floor( (t/1000/60) % 60 );
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		var days = Math.floor( t/(1000*60*60*24) );
		//Output the data as a reusable object
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}


	//Calculate the days remaining
	function initializeDays(id, deadline){
		var days = document.getElementById(id);
		//The timeinterval is set to
		//calculate the remaining time in days.
		//and run it once every second
		var timeinterval = setInterval(function(){
			var t = getTimeRemaining(deadline);
			//If there is less than 10 days left
			//add a 0 in front of the single number
			if(t.days<10){
				days.innerHTML = '0' + t.days;
			}else {
				days.innerHTML = t.days;
			}
			//If the remaining time gets to zero, stop the clock.
			if(t.total<=0){
				clearInterval(timeinterval);
			}
			//If the days is not specified
			if(!t.days) {
				days.innerHTML = "--";
			}
			//If there is no more days left
			if(t.days<=0) {
				days.innerHTML = "00";
			}
		},1000);
	}

	//Calculate the hours remaining
	function initializeHours(id, deadline){
		var hours = document.getElementById(id);
		var timeinterval = setInterval(function(){
			var t = getTimeRemaining(deadline);
			//If there is less than 10 hours left
			//add a 0 in front of the single number
			if(t.hours<10){
				hours.innerHTML = '0' + t.hours;
			}else {
				hours.innerHTML = t.hours;
			}
			//If the remaining time gets to zero, stop the clock.
			if(t.total<=0){
				clearInterval(timeinterval);
			}
			//If the days is not specified
			if(!t.hours) {
				hours.innerHTML = "--";
			}
			//If there is no more days left
			if(t.hours<=0) {
				hours.innerHTML = "00";
			}
		},1000);
	}


	//Calculate the minutes remaining
	function initializeMin(id, deadline){
		var min = document.getElementById(id);
		var timeinterval = setInterval(function(){
			var t = getTimeRemaining(deadline);
			//If there is less than 10 minutes left
			//add a 0 in front of the single number
			if(t.minutes<10){
				min.innerHTML = '0' + t.minutes;
			}else {
				min.innerHTML = t.minutes;
			}
			//If the remaining time gets to zero, stop the clock.
			if(t.total<=0){
				clearInterval(timeinterval);
			}
			//If the days is not specified
			if(!t.minutes) {
				min.innerHTML = "--";
			}
			//If there is no more days left
			if(t.minutes<=0) {
				min.innerHTML = "00";
			}
		},1000);
	}


	//Calculate the seconds remaining
	function initializeSec(id, deadline){
		var sec = document.getElementById(id);
		var timeinterval = setInterval(function(){
			var t = getTimeRemaining(deadline);
			//If there is less than 10 seconds left
			//add a 0 in front of the single number
			if(t.seconds<10){
				sec.innerHTML = '0' + t.seconds;
			}else {
				sec.innerHTML = t.seconds;
			}
			//If the remaining time gets to zero, stop the clock.
			if(t.total<=0){
				clearInterval(timeinterval);
			}
			//If the days is not specified
			if(!t.seconds) {
				sec.innerHTML = "--";
			}
			//If there is no more days left
			if(t.seconds<=0) {
				sec.innerHTML = "00";
			}
		},1000);
	}

	//Printing the time values from
	//the (days,hours,minutes,seconds)
	//functions in individual 
	//(days,hours,minutes,seconds) divs
	function initializeClock() {
		initializeDays('days', deadline);
		initializeHours('hours', deadline);
		initializeMin('min', deadline);
		initializeSec('sec', deadline);
	}

})();
