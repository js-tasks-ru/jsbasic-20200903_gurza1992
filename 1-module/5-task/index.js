/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */



function truncate(str, maxlength) {

  if (str.length < maxlength) {

    return str;

  } else {

    let newString = str.slice(0, maxlength);

    let array = newString.split('');

    delete array[maxlength - 1];

    let ExtraString = array.join('');

    return ExtraString +  "…";
  }

}
