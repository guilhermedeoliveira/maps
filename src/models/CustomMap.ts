export class CustomMap {
  private googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(
      document.getElementById("map-container"),
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    );
  }
}
