function getStartMessage() {
  return "Hey there...\n\n*Commands*\n\n`local stat/Local stat - ශ්‍රී ලංකාව තුල CoViD19 නවතම තත්වය දැනගැනීමට`\n\n`global stat/Global stat - ලොව පුරා CoViD19 නවතම තත්වය දැනගැනීමට`\n";
}

function getGlobalStatMessage(_data) {
  var _msg =
    "*CoViD19 Updates - Sri Lanka*\n\n" +
    "`Updated time` : " +
    _data.data.update_date_time +
    "\n\n`Deaths`: " +
    _data.data.local_deaths +
    "\n`New Cases Today`: " +
    _data.data.local_new_cases +
    "\n`Active Cases`: " +
    _data.data.local_active_cases +
    "\n`Recovered`: " +
    _data.data.local_recovered +
    "\n`Individuals in hospitals`: " +
    _data.data.local_total_number_of_individuals_in_hospitals +
    "\n`Total Cases`: " +
    _data.data.local_total_cases;
  return _msg;
}

function getLocalStatMessage(_data) {
  var _msg =
    "*CoViD19 Updates - Sri Lanka*\n\n" +
    "`Updated time` : " +
    _data.data.update_date_time +
    "\n\n`Deaths`: " +
    _data.data.local_deaths +
    "\n`New Cases Today`: " +
    _data.data.local_new_cases +
    "\n`Active Cases`: " +
    _data.data.local_active_cases +
    "\n`Recovered`: " +
    _data.data.local_recovered +
    "\n`Individuals in hospitals`: " +
    _data.data.local_total_number_of_individuals_in_hospitals +
    "\n`Total Cases`: " +
    _data.data.local_total_cases;

  return _msg;
}

module.exports = {
  getStartMessage,
  getLocalStatMessage,
  getGlobalStatMessage,
};
