const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    decodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoibmlsLTIwIiwiYSI6ImNrZzR3OTdpMjBuenUycXBqa3kzOTdkem0ifQ.aXYl_Mzas8ZBzd5trfuTCg&limit=1";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location.Try another location.", undefined);
    } else {
      callback(undefined, {
        place_name: body.features[0].place_name,
        longitude: body.features[0].center[0],
        lattitude: body.features[0].center[1],
      });
    }
  });
};
module.exports = geocode;
