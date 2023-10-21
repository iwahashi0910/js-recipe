const imageElement = document.getElementById("dog-image")
const NextButton = document.getElementById("Next-Button")

// 指定したサーバーにデータを取りに行く
const picture = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() // 結果を json として読み込んで、次の then に渡す
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
picture()

NextButton.onclick = function () {
  picture()
}
