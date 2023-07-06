// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

const { fetchCoordsByIP, fetchMyIP } = require('./iss');

fetchCoordsByIP('142.186.102.79', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned Coordinates:', coordinates);
});