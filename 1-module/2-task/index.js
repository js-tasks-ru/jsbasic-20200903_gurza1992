/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

function isValid(userName) {

  let array = userName.split('');

  for (let i = 0; i < array.length; i++) {

    if (array.length >= 4) {

      return true;

    }

    else if (array.length < 4) {

      return false;

    }

    else if (array[i] === '') {

      return false;

    }
  }

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
