 var icons = new Skycons({"color": "#999999"}),
			  list  = [
				"sleet"
			  ],
			  i;

		  for(i = list.length; i--; )
			icons.set(list[i], list[i]);

		  icons.play();

 var icons = new Skycons({"color": "#f5f5f5"}),
				  list  = [
					"clear-night", "partly-cloudy-day",
					"partly-cloudy-night", "cloudy", "rain", "clear-day", "snow", "wind",
					"fog"
				  ],
				  i;

			  for(i = list.length; i--; )
				icons.set(list[i], list[i]);

			  icons.play();





$(document).ready(function() {
				//Horizontal Tab
				$('#parentHorizontalTab').easyResponsiveTabs({
					type: 'default', //Types: default, vertical, accordion
					width: 'auto', //auto or any width like 600px
					fit: true, // 100% fit in a container
					tabidentify: 'hor_1', // The tab groups identifier
					activate: function(event) { // Callback function if tab is switched
						var $tab = $(this);
						var $info = $('#nested-tabInfo');
						var $name = $('span', $info);
						$name.text($tab.text());
						$info.show();
					}
				});
			});



		

	function startTime() {
				var today = new Date();
				var h = today.getHours();
				var m = today.getMinutes();
				var s = today.getSeconds();
				m = checkTime(m);
				s = checkTime(s);
				document.getElementById('w3time').innerHTML =
				h + ":" + m + ":" + s;
				var t = setTimeout(startTime, 500);
			}
			function checkTime(i) {
				if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
				return i;
			}


			var x = document.getElementById("demo");

			function getLocation() {
					if (navigator.geolocation) {
							navigator.geolocation.getCurrentPosition(storelocation);
					} else { 
							x.innerHTML = "Geolocation is not supported by this browser.";
					}
			}
			getLocation();

			function storelocation(position){
				localStorage.setItem('wa_lat',JSON.stringify(position.coords.latitude));
				localStorage.setItem('wa_lon',JSON.stringify(position.coords.longitude));
			}