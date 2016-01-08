(function() {

//Get the start_date data from the endpoint url
//with a function that returns the start_date value
//from the ajax request
function getValues(url) {
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
//Saving the return value from the getValues()
//in a variable unixDate
var unixDate = getValues();
console.log("Unix date: " + unixDate);


//Converting the unix date into Javascript Date object
var unixToDate = new Date(unixDate * 1000);
var endtime = unixToDate.toGMTString();
console.log("Endtime: " + endtime);

//Calculation of the time remaining in days,
//hours, minutes and seconds
function getTimeRemaining(endtime){
	//Date.parse function is native JavaScript that
	//converts a time string into a value in milliseconds
	var t = Date.parse(endtime) - Date.parse(new Date());
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


//Calculate the days remaining, printing it
//in the days div
function initializeDays(id, endtime){
	var days = document.getElementById(id);
	//The timeinterval is set to
	//calculate the remaining time in days.
	//and run it once every second
	//Output the remaining time in days to our div.
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		//If the days are less than 10 add a 0
		//in front of the single number
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
initializeDays('days', endtime);


//Calculate the hours remaining, printing it
//in the hours div
function initializeHours(id, endtime){
	var hours = document.getElementById(id);
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		if(t.hours<10){
			hours.innerHTML = '0' + t.hours;
		}else {
			hours.innerHTML = t.hours;
		}
		if(t.total<=0){
			clearInterval(timeinterval);
		}
		if(!t.hours) {
			hours.innerHTML = "--";
		}
		if(t.hours<=0) {
			hours.innerHTML = "00";
		}
	},1000);
}
initializeHours('hours', endtime);


//Calculate the minutes remaining, printing it
//in the min div
function initializeMin(id, endtime){
	var min = document.getElementById(id);
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		if(t.minutes<10){
			min.innerHTML = '0' + t.minutes;
		}else {
			min.innerHTML = t.minutes;
		}
		if(t.total<=0){
			clearInterval(timeinterval);
		}
		if(!t.minutes) {
			min.innerHTML = "--";
		}
		if(t.minutes<=0) {
			min.innerHTML = "00";
		}
	},1000);
}
initializeMin('min', endtime);


//Calculate the seconds remaining, printing it
//in the sec div
function initializeSec(id, endtime){
	var sec = document.getElementById(id);
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		if(t.seconds<10){
			sec.innerHTML = '0' + t.seconds;
		}else {
			sec.innerHTML = t.seconds;
		}
		if(t.total<=0){
			clearInterval(timeinterval);
		}
		if(!t.seconds) {
			sec.innerHTML = "--";
		}
		if(t.seconds<=0) {
			sec.innerHTML = "00";
		}
	},1000);
}
initializeSec('sec', endtime);

})();
