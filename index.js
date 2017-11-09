import moment from 'moment';
import $ from "jquery";

console.log("Hello from JavaScript4!");
console.log(moment().startOf('day').fromNow());

var name = "Kacperos3", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

var wednesdays = [];

var wednesday = moment([2017, 10])
    .day("Wednesday");
if (wednesday.date() > 7) wednesday.add(7,'d');
var year = wednesday.year();
while(year === wednesday.year()){
    wednesdays.push(wednesday.format('YYYY-MM-DD'));
    wednesday.add(7,'d');
}
$.each(wednesdays, function(i, v) {
	console.log(`https://apipr.polskieradio.pl/api/playlist?date=${v}&antenneId=4&callback=?`);
	$.getJSON( `https://apipr.polskieradio.pl/api/playlist?date=${v}&antenneId=4&callback=?`, function( data ) {
	//console.log(data[2].Title);

	$.each(data, function(i, v) {
	    if (v.Title == "Nocny TransPort") {
	        console.log(v.Songs.length + " " + v.Start);
	        var items = [];
	        $.each(v.Songs, function( j, val ) {
		    	items.push( "<li id='" + j + "'>" + val.Artist + " - " + val.Title + "</li>" );
		  	});
		  	$( "<h3/>", {
			    "class": "list-heading",
			    html: moment(v.Start).format('YYYY-MM-DD')
			  }).appendTo( "body" );
	        $( "<ul/>", {
			    "class": "my-new-list",
			    html: items.join( "" )
			  }).appendTo( "body" );
	    }
	});
});
});


// $.ajax({
//   dataType: "jsonp",
//   url: "https://apipr.polskieradio.pl/api/playlist?date=2017-11-08&antenneId=4",
//   success: function(dataWeGotViaJsonp){
//   		console.log(data);
//   }

// });

// function logResults(json){
//   console.log(json);
// }

// $.ajax({
//   url: "https://apipr.polskieradio.pl/api/playlist?date=2017-11-08&antenneId=4",
//   dataType: "jsonp",
//   jsonpCallback: "logResults"
// });