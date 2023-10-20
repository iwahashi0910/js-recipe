const display = document.getElementById("display")
const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")

button3.onclick = function () {
  display.textContent = "正解！"
}
button1.onclick = function () {
  display.textContent = "不正解"
}
button2.onclick = function () {
  display.textContent = "不正解"
}
