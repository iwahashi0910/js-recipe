const judge3 = function (n) {
  while (n) {
    if (n % 10 === 3) {
      return true
    }
    n = Math.floor(n / 10)
  }
  return false
}

// 引数 number を受け取る関数
const genkiFunction = function (number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || judge3(n)) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)

const FizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

FizzBuzz(100)
