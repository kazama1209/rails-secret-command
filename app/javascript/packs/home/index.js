var secretCommands = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] // 隠しコマンド
var inputtedCommands = [] // 入力されたコマンド

document.onkeydown = function(e) {
  inputtedCommands.push(e.keyCode)
  
  // 入力されたコマンドの順番と値が隠しコマンドと全一致した場合はアラートメッセージを表示
  if (inputtedCommands[inputtedCommands.length - 1] === secretCommands[inputtedCommands.length - 1]) {
    if (inputtedCommands.length === secretCommands.length) {
      if (window.confirm("隠しページへ飛びますか？")) {
        location.href = "http://localhost:3000/secret_pages" // 隠しページへ飛ぶ
      } else {
        window.alert("キャンセルしました") // キャンセル時の処理
      }
      inputtedCommands.length = 0
    }
  } else {
    inputtedCommands.length = 0 // 少しでも違った場合はリセット
  }

  console.log(inputtedCommands)
}
