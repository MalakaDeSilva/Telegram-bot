function getChartData() {
  let data = fetch(
    "https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json",
    { method: "GET" }
  )
    .then((resp) => resp.json())
    .then((jsonRes) => {
      return jsonRes;
    })
    .catch((err) => console.log(err));

  return data;
}

module.exports = {
  getChartData,
};
