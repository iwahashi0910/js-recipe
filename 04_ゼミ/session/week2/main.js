const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

// Enter を押したら追加ボタンが押される
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    addButton.onclick()
  }
}

addButton.onclick = function () {
  // タグ名を指定して要素をつくる
  const memo = document.createElement("div")
  // textContentにmemoInput.valueを入れる
  memo.textContent = memoInput.value

  // mainContainerにmemo要素を追加
  memoContainer.append(memo)

  // ボタンを押したら、値が消える
  memoInput.value = ""

  // 削除ボタンを作る
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // memoを削除する
    memo.remove()
  }

  // memoにdeleteButton要素を追加
  memo.append(deleteButton)
}
