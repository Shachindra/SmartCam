$(document).ready(function() {
	(function goStreaming() {
		$.get('/ajax', function(myIP) {
			//alert("IP Address: "+myIP);
			// CHANGE THIS TO THE APPROPRIATE WS ADDRESS
			var wsUrl = 'ws://'+myIP+':9084/';

			// Show loading notice
			var canvas = document.getElementById('canvas-video');
			var ctx = canvas.getContext('2d');
			ctx.fillStyle = '#333';
			ctx.fillText('Loading...', canvas.width/2-30, canvas.height/3);

			// Start the player
			var client = new WebSocket(wsUrl);
			var player = new jsmpeg(client, { canvas:canvas });
		});
	}());
	
	$("#getServerIP").click(function() {
		$.get('/ajax', function(myIP) {
			alert("IP Address: "+myIP);
		});
	});
	
	$("#getClientIP").click(function() {
		$.get('/ajax', function(myIP) {
			alert("IP Address: "+myIP);
		});
	});
	
	$("#getPic").click(function() {
		var dataURL = $('#canvas-video')[0].toDataURL();
		alert("Data URL: "+dataURL);
	});
	
	$("#getImageURL").click(function() {
		var dataURL = $('#canvas-video')[0].toDataURL();
		alert("Data URL: "+dataURL);
		
		var apikey = "a54357f8-cdce-4bb4-a544-e64972c5d41f";
		var apiurlFDSync = "https://api.idolondemand.com/1/api/sync/detectfaces/v1";
		var apiurlFDAsync = "https://api.idolondemand.com/1/api/async/detectfaces/v1";
		
		/* $.ajax({
			type: "POST",
			url: apiurlFDAsync,
			data: { 
				imgBase64: canvas.toDataURL("image/png"),
				apikey: apikey
				}
		}).done(function(o) {
			console.log('saved');
		}); */
		
		$.ajax({
			type: 'POST',
			url: apiurlFDAsync,
			data: { 
				imgBase64: canvas.toDataURL("image/png"),
				apikey: apikey
				},
			success: function(data, status, xml){
				// do something is successful
				
			},
			error: function(xml, status, error){
				// do something if there was an error
				
			},
			complete: function(xml, status){
				// do something after success or error no matter what
				
			}
		});

	});
});
