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