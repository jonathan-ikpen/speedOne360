const getLocation = async () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    new Promise((resolve, reject) => {
      try {
        resolve(position.coords.latitude);
      } catch (err) {
        reject(new Error("No location"));
      }
    });
  });
};

export default getLocation;
