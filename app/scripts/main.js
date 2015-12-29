
//$.ajax({
//	url: "http://unbottle.getsandbox.com/campaign",
//	contentType: "application/json",
//}).done(function(data) {
//	console.log(data);
//	//console.log(data.start_date);
//	var start_date = data.start_date;
//});


//Get the data from REST API
jQuery.extend({
	getValues: function(url) {
		var startDate = null;
		$.ajax({
			type: 'get',
			url: "http://unbottle.getsandbox.com/campaign",
			dataType: 'json',
			contentType: "application/json",
			async: false,
			success: function(data) {
				startDate = data.start_date;
			}
		});
		return startDate;
	}
});
var unixTime = $.getValues();
//Print the data from the Endpoint - in UNIX
console.log("Unix: " + unixTime);

//Converting into ISO
var dateISO = new Date(unixTime).toISOString();
dateISO; // => "1970-01-17T12:17:24.000Z"
console.log("dateISO: " + dateISO);

//Converting into YYYY-MM-DD
function formatDate(date) {
    var d = new Date(dateISO),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
console.log(formatDate(dateISO));

//
var deadline = '2016-01-01';
var deadline = formatDate(dateISO);



function getTimeRemaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

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
initializeSec('sec', deadline);



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
initializeMin('min', deadline);



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
initializeHours('hours', deadline);



function initializeDays(id, endtime){
	var days = document.getElementById(id);
	var timeinterval = setInterval(function(){
		var t = getTimeRemaining(endtime);
		if(t.days<10){
			days.innerHTML = '0' + t.days;
		}else {
			days.innerHTML = t.days;
		}
		if(t.total<=0){
		  clearInterval(timeinterval);
		}
		if(!t.days) {
			days.innerHTML = "--";
		}
		if(t.days<=0) {
			days.innerHTML = "00";
		}
	},1000);
}
initializeDays('days', deadline);


//http://unbottle.getsandbox.com/campaign

//$.ajax({ 
//    type: 'GET', 
//    url: 'http://unbottle.getsandbox.com/campaign.json', 
//    data: { data }, 
//    dataType: 'json',
//    success: function (data) { 
//        $.each(data, function(index, element) {
//            $('#test').append($('<div>', {
//                text: element.name
//            }));
//        });
//    }
//});

//$.getJSON(http://unbottle.getsandbox.com/campaign, function(data){
//   console.log(data) // print array from resource
//})

//$.ajax({
//   url: "http://unbottle.getsandbox.com/campaign",
//   dataType: "json"
//}).done(function( data ) {
//  console.log( "Entire array:", data);
//});

