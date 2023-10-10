// TRY: 練習問題１
57052 + 57054 // 114106
"114" + "106" // "114106"
// TRY: 練習問題２
let x = 5
x += 2
x *= 5
x = 100 % x
x /= 6

x // 5
// TRY: 練習問題３
let happiness = 63 // 0 から 100 までの数値を代入してください
let sleepiness = 93 // 0 から 100 までの数値を代入してください

const isHappy = happiness > 90
const isSleepy = sleepiness > 90

const isNotHappyAndSleepy = !isHappy && isSleepy
console.log(isNotHappyAndSleepy)

// happinessが0以上90以下
// sleepinessが90より大きく100以下

const isHappyAndNotSleepy = isHappy && !isSleepy
console.log(isHappyAndNotSleepy)
// 以下のコメントアウトを外して確認してみましょう
console.log(
  "isNotHappyAndSleepy" + "は" + true + "ですか？",
  isNotHappyAndSleepy,
)
console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)
