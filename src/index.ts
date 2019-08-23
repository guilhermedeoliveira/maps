import { User } from "./models/User";

const user = new User();

const mapContainer = document.getElementById("map-container");

const mapOptions = {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
};

new google.maps.Map(mapContainer, mapOptions);
