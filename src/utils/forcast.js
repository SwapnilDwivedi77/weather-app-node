const request = require("postman-request");

const forcast = (lattitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=85a77f9d8e378315a1beb732c21b4b20&query=' +lattitude + ',' + longitude

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback(
        "Network faliure.Please check your network connection.",
        undefined
      );
    } else if (body.error) {
      callback("Invalid coordinates.Try another search.", undefined);
    } else
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is " +
        body.current.temperature +
          " degree outside and " +
        body.current.precip +
          "% chance of rain"
      );
  });
};
module.exports = forcast;
