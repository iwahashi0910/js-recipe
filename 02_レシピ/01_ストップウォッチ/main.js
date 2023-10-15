const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  console.log(count)
  display.textContent = count / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

/* const countUp = function() {
  count += 0.01
  display.textContent = count
} 
の時、小数点以下の数を２進数で表現できない
（近似値を使わざるを得ない）ことにより発生する誤差である
丸め誤差が生じるので期待したようには動かない。*/
