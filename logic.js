var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    zoom: 2
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );

markers = [
    {
      "name": "Canada",
      "url": "https://en.wikipedia.org/wiki/Canada",
      "lat": 56.130366,
      "lng": -106.346771
    },
    {
      "name": "Anguilla",
      "url": "https://en.wikipedia.org/wiki/Anguilla",
      "lat": 18.220554,
      "lng": -63.068615
    },
    {
      "name": "Japan",
      "url": "https://en.wikipedia.org/wiki/Japan",
      "lat": 36.204824,
      "lng": 138.252924
    }
 ];

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng] )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
      .addTo( map );
}