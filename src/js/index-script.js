function initMap() {
  const centerLocation = new google.maps.LatLng(30.76, 29.69);
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: centerLocation,
    mapTypeId: 'roadmap'
    });
    const marker = new google.maps.Marker({
      position: centerLocation,
      icon: "../dist/imgs/marker.png",
      map: map
  });
}