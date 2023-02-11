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

const getLeo = async () => {
  const response = await fetch("https://ipwho.is");
  if (response.ok == true && response.status == 200) {
    const data = await response.json();
    return data;
  }
};

export default getLeo;
