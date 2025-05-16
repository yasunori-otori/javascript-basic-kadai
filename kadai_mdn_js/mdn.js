// 現在の日付と時刻を持つDateオブジェクトを作成
const today = new Date();

// Dateオブジェクトのメソッドを使って年、月、日を取得
const year = today.getFullYear();  // 年を取得
const month = today.getMonth() + 1; // 月を取得 (getMonth()は0から始まるため+1する)
const day = today.getDate();     // 日を取得

// 取得した年、月、日を組み合わせて文字列を作成し、コンソールに出力
console.log(year + "年" + month + "月" + day + "日");