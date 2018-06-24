export default class Coordinate {
  constructor(width, height) {

      this.country;
      this.state;
      this.city;
      this.latitude;
      this.longitude;
      this.ip;

      function init() {
      }
      function event() {
          document.getElementById('btn').addEventListener('click', autogeo);
      }

      function autogeo() {
          $.ajax({
              url: "https://geoip-db.com/jsonp",
              jsonpCallback: "callback",
              dataType: "jsonp",
              success: function( location ) {
                  $('#country').html(location.country_name);
                  $('#state').html(location.state);
                  $('#city').html(location.city);
                  $('#latitude').html(location.latitude);
                  $('#longitude').html(location.longitude);
                  $('#ip').html(location.IPv4);
                  this.country = location.country_name;
                  this.state = location.state;
                  this.city = location.city;
                  this.latitude = location.latitude;
                  this.longitude = location.longitude;
                  this.ip = location.IPv4;
                  console.log(this.country)

              }
          });
      }

      init();
      event();
  }
}
