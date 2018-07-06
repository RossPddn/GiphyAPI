// $('#btn').on('click', function(){
// 	event.preventDefault();
// 	$('#btn').hide();
// 	//var topic = $('#theme').val();
// 	//console.log(topic);
// 	// var url_to_go_to = "https://api.giphy.com/v1/gifs/search?q=";
// 	// url_to_go_to += topic;
//     // url_to_go_to += "&api_key=ZOo7eFwD4ml8f4BkxUJ9pwjTo0Z2RgAE&limit=10"
    
//     console.log(url_to_go_to);
// 	// $.ajax({url: url_to_go_to})
// 	// .then(function(res){

// 	// 	console.log(res);

// 	// 	// $('h1').text(res.name);
// 	// 	// $('#band').attr('href', res.url);
// 	// 	// $('img').attr('src', res.image_url).attr('width', "150").attr('height', "150");
// 	// 	// $('#fans').text(res.tracker_count);
// 	// 	// $('#upcomingevents').text(res.upcoming_event_count);

// 	// 	// $('#tourdates').attr('href', res.url);

// 	// 	// $('div').removeClass('hide');
// 	// });
// });
//https://api.giphy.com/v1/gifs/search?q=star+wars&api_key=ZOo7eFwD4ml8f4BkxUJ9pwjTo0Z2RgAE&limit=5
$('form button').on('click', function(){
	event.preventDefault();
	var input_value = $('input').val();
	



	var url_to_go_to = "https://api.giphy.com/v1/gifs/search?q=";
	url_to_go_to+= input_value;
	url_to_go_to += "&api_key=ZOo7eFwD4ml8f4BkxUJ9pwjTo0Z2RgAE&limit=15"

	$.ajax({url: url_to_go_to})
	.then(function(res){
		for(i=0;i<=15;i++){
		test = res.data[i].images.downsized_large.url;
		image = $('<img>').attr({'src': test});
		$('#pictures').append(image);
		}

		// $('h1').text(res.name);
		// $('#band').attr('href', res.url);
		// $('img').attr('src', res.image_url).attr('width', "150").attr('height', "150");
		// $('#fans').text(res.tracker_count);
		// $('#upcomingevents').text(res.upcoming_event_count);

		// $('#tourdates').attr('href', res.url);

		// $('div').removeClass('hide');
	});

});