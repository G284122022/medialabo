// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let answers = document.querySelector("button#answers");
answers.addEventListener("click", hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="nyuryoku"]');
  let j = i.value;
  let yoso = parseInt(j);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu = kaisu + 1;
  let s5 = document.querySelector("span#kaisu");
  s5.textContent = kaisu;
  let s6 = document.querySelector("span#answer");
  s6.textContent = yoso;
  let s7 = document.querySelector("p#result");
  if (kaisu >= 4) {
    s7.textContent = "答えは" + kotae + "でした。すでにゲームは終わっています。";
  } else if (kaisu === 3) {
    if (kotae === yoso) {
      s7.textContent = "正解です。おめでとう！";
    } else {
      s7.textContent = "まちがい、残念でした答えは" + kotae + "です";
    }
  } else {
    if (kotae === yoso) {
      s7.textContent = "正解です。おめでとう！";
    } else if (yoso < kotae) {
      s7.textContent = "まちがい、答えはもっと大きいですよ";
    } else {
      s7.textContent = "まちがい、答えはもっと小さいですよ";
    }
  }
}
