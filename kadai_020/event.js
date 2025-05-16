const btn = document.getElementById('btn');

const h2text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  h2text.textContent = 'ボタンをクリックしました'
});

/*
もう一度押すことで元に戻るコード
// count-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// h2要素を取得し、定数に代入する
const h2Element = document.getElementById('text');

// ★ h2要素の元のテキストを記憶しておくための定数（追加）
const originalText = h2Element.textContent;

// ★ 変更したい新しいテキストを定義する（追加）
const newText = 'ボタンをクリックしました！';


// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // ★ 現在のh2のテキストを取得する
  const currentText = h2Element.textContent;

  // ★ 現在のテキストが元のテキストと同じかどうかで判断し、切り替える
  if (currentText === originalText) {
    // もし現在のテキストが元のテキストなら、新しいテキストに変更する
    h2Element.textContent = newText;
  } else {
    // もし現在のテキストが元のテキストではないなら（＝新しいテキストなら）、元のテキストに戻す
    h2Element.textContent = originalText;
  }

});
*/
