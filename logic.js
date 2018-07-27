var map = "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9ucGFyYSIsImEiOiJjamlucjd6YWkwaHphM29yZmN3OHBvd3k5In0.kBpLq9e1DnusW96_EQHdlg"
var myMap = L.map('map', {
    center: [37.09, -95.71],
    zoom: 5
});

L.tileLayer(map).addTo(myMap);

var url = "https://data.sfgov.org/resource/gxxq-x39z.json?$limit=10000"

