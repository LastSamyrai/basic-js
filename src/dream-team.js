const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)){
    return false;
  }

  let teamsName = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      teamsName.push(members[i].trim().toUpperCase().split('')[0]);
    }
  }

  teamsName.sort();

  return teamsName.join('');
};
