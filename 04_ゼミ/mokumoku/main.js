const multiply = function (a, b) {
  return a * b
}

multiply(3, 5)

for (let i = 0; i < 5; i++) {
  console.log(i)
}

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

const character = {
  name: "syouhei",
  age: 29,
  hobbies: ["ゲーム", "漫画", "睡眠"],
  mother: {
    name: "kayoko",
  },
}

console.log(character.hobbies[0])
