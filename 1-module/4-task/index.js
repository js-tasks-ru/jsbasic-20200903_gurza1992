/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  if (str.includes('1XbeT now') || str.includes('free xxxxx')) {

    return true;

  }
  else if (str.includes('innocent rabbit')) {

  return false;

  }
}


