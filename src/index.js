/**
 * const,let等の変数宣言
 */

console.log("---\nvarの解説\n---");

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再現可能
var val1 = "var変数を再宣言";
console.log(val1);

console.log("---\nletの解説\n---");
let val2 = "let変数";
console.log(val2);

// letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可能
// let val2 = "let変数を再宣言";
// エラー発生
// /src/index.js: Identifier 'val2' has already been declared

console.log("---\nconstの解説\n---");
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
// val3 = "const変数";
// エラー発生
// →TypeError: "val3" is read-only

// constの再宣言は不可
// const val3 = "const変数";
// エラー発生
// SyntaxError: /src/index.js: Identifier 'val3' has already

// const（オブジェクトの場合）
console.log("---\nconst(オブジェクトの場合）の解説\n---");

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "くま",
  age: 53
};
console.log(val4);

val4.name = "くまさん";
console.log(val4);

val4.address = "おきなわ";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const（配列の場合）
console.log("---\nconst(配列の場合）の解説\n---");

const val5 = ["dog", "cat"];
console.log(val5);

val5[0] = "bird";
val5.push("dog");

/**
 * テンプレート文字列　(ES2015で追加)
 */
const name = "くま";
const age = 53;
// 「私の名前はくまです。年齢は53歳です。」

// 従来の書き方
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数　(ES2015で追加)
 */
// 従来の関数の書き方
function func1(str) {
  return str;
}
console.log(func1("func1です"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です(アロー関数)"));

// return を省略
const func4 = (str) => str;
console.log(func4("func4です(アロー関数)"));

//アロー関数(return記述)
const add_p1 = (val1, val2) => {
  return val1 + val2;
};
console.log(add_p1(3, 5));

// returnを省略
const add = (val1, val2) => val1 + val2;
console.log(add(3, 5));
