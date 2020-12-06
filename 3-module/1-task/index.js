/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {

  let names = [];

  for(let elem = 0; elem < users.length; elem++){

    names.push(users[elem].name)

  }

  return names

}
