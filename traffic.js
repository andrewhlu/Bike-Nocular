function initMap() {
  var uluru = {lat: 34.416700, lng: -119.845230};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: uluru,
    mapTypeId: 'satellite'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function refreshmap() {
  var bike = document.getElementById('bikelist').value;
  if(bike == 1) {
    var uluru = {lat: 34.416700, lng: -119.845230};
  }
  else {
    var uluru = {lat: 34.412900, lng: -119.845796};
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 20,
    center: uluru,
    mapTypeId: 'satellite'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}