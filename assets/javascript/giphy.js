
//https://api.giphy.com/v1/gifs/search?q=star+wars&api_key=ZOo7eFwD4ml8f4BkxUJ9pwjTo0Z2RgAE&limit=5


$('form button').on('click', function(){
	event.preventDefault();
	var input_value = $('input').val();
	var url_to_go_to = "https://api.giphy.com/v1/gifs/search?q=";
	url_to_go_to+= input_value;
	url_to_go_to += "&api_key=ZOo7eFwD4ml8f4BkxUJ9pwjTo0Z2RgAE&limit=15"
	button = $('<button>').text(input_value).attr('id','themeButton');
	$('#buttons').append(button);
	
	

	$.ajax({url: url_to_go_to})
	.then(function(res){
		$('#pictures').empty();
		for(i=0;i<=15;i++){
		gif = res.data[i].images.downsized_large.url;
		image = $('<img>').attr({'src': gif, 'height': '160', 'width': '160'});
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
