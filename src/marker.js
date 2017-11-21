const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activity: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  if(iconURLs[type]) {
    const markerDomEl = document.createElement('div');
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
    let newMap = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    return newMap;
  }
};

module.exports = buildMarker;
