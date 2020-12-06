/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {

  let array = [];

  for (let key in obj) {

    array.push(obj[key]);

  }

  if (array.length > 0) {

    return false;

  } else {

    return true;

  }
}
