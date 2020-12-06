let calculator = {
  read: function (a, b) {
    calculator.a = a;
    calculator.b = b;
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.b * this.a;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
