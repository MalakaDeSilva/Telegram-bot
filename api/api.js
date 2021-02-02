const fetch = require("node-fetch");

function getCovidUpdates() {
  let data = fetch("https://hpb.health.gov.lk/api/get-current-statistical", {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((err) => console.log(err));

  return data;
}

module.exports = {
  getCovidUpdates,
};
