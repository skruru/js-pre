# JavaScript ガイド 文法とデータ型(補足)

## 基本

大文字と小文字を区別します。  
Unicode 文字セットを使用していますので日本語の変数名や関数名を使用することもできます。

```Javascript
let 変数 = '1です。';

let 関数 = function (引数) {
  console.log(引数);
};

関数(変数);
```

## コメント

```Javascript
// 一行コメント

 /* コメントです */

/**
 * 複数行コメント
 *
 * 関数のコメントなどに使用します。
 * 先頭にアスタリスクを二つ入れます。
 */

/*
 * 複数行コメント
 *
 * 先頭のアスタリスクが一つのもので各行にアスタリスクが入る書き方はあまりしません
 */

/*
コードの一部をコメントアウトする場合
let sample = function () {
  return 'sample';
}
 */
```

## 宣言

IE11でも`let`, `const`は使用できるので `var`は使用しない方が良いでしょう。

`let`は再代入できる変数宣言。

`const`は再代入できない変数宣言。

```Javascript
// 値を代入する
let letTest = 'test';

// letの場合は値を再代入してもOK
letTest = 'test2';

// 値を代入する
const constTest = 'test';

// constの場合は値を再代入するとエラー
constTest = 'test2';

// ただし値の中身を書き換えることはOK
const constTest2 = {
  name: '太郎',
  age: 18,
};

// 中身を書き換えているので再代入には当たらない
constTest2.age = 38;
```

### 変数

数字や`$`, `_`以外の記号から始まる名前は付けられません。

### 変数の宣言

#### グローバル変数

ブラウザでいうと`window`オブジェクトに属する変数のこと  
どのファイルからも参照できる

#### ローカル変数

ファイル内でのみ使用できる変数のこと

#### グローバルスコープのローカル変数

関数や`{}`に囲まれていない変数のこと

#### ブロックスコープのローカル変数

`{}`内でのみ使用できる変数のこと  
`let`や`const`はブロックスコープが適用されるが`var`には適用されない

#### 関数スコープのローカル変数

`function`内でのい使用できる変数のこと  
`let`や`const`、`var`の全てで適用される

#### いろいろと試してみる

下記の内容をmain.jsに書きこんで試してみましょう。

```Javascript
// 宣言部なし
_global = 'グローバル変数';

// function の中以外でvarで宣言するとグローバル
var _varGlobal = 'グローバル変数';

// letやconstの場合はローカル
let _letLocal = 'グローバルスコープのローカル変数';
const _constLocal = 'グローバルスコープのローカル変数';

// function の中の扱い
let _method = function () {
  var _varLocal = '関数スコープのローカル変数';

  const _constLocalBlock = '関数スコープのローカル変数';
  console.log(_constLocalBlock);
};

_method();

// ブロックスコープ({}で囲まれた部分)の扱い
if (true) {
  var _varBlockGlobal = 'これはfunctionの中ではないのでグローバル変数';

  const _constLocalBlock = 'ブロックスコープのローカル変数(前のものとは異なる変数)';
  console.log(_constLocalBlock);
}
```

#### ES2015からのスコープの切り方について

`var`しか使えなかった頃は変数のスコープを限定するために下記のような書き方が一般的だった。  
しかしながらブロックスコープのローカル変数が使用できるようになったことによりより簡素に書くことができる。

```Javascript
/**
 * ES5のときの書き方
 *
 * 即時実行関数の中で宣言を行うことで関数スコープのローカル変数として扱っていた
 */
(function () {
  var localValiable = 'ローカル変数';
})();

/**
 * ES2015以降
 *
 * ブロックを直接書くことができるため下記の書き方ができる
 * これはブロックであってオブジェクトではないので間違えないように
 */
{
  let localValiable = 'ローカル変数';
}
```

### 変数の巻き上げ

`let`や`const`には存在しませんが`var`には変数の巻き上げというものが存在します。

```Javascript
/**
 * 例 1
 *
 * 変数の宣言前だがエラーにならずundefined
 */
console.log(x);
var x = 3;

/**
 * 例 2
 *
 * myvarは宣言しているつもりだが関数スコープの中でvarを使って宣言しているために別の変数として扱われている
 * 関数の中でvarを使用しなければ思ったとおりに動く
 */
var myvar = 'my value';

(function() {
  console.log(myvar);
  var myvar = 'local value';
})();
```

### 関数の巻き上げ

```Javascript
/**
 * 関数宣言
 *
 * 巻き上げが行われる
 */
foo(); // "bar"

function foo() {
  console.log('bar');
}

/**
 * 関数式(変数のように宣言したもの)
 *
 * 巻き上げが行われない(エラーになる)
 */
baz(); // TypeError: baz は関数ではない

var baz = function() {
  console.log('bar2');
};
```

### 宣言のおまけ(再宣言)

`var`を使って何度も同じ変数名を宣言できたけと他ではどうかな？
下記のものを試してみよう。

```Javascript
var test = 'test1';
console.log(test);

var test = 'test2';
console.log(test);
```

```Javascript
var test = 'test1';
console.log(test);

let test = 'test2';
console.log(test);
```

```Javascript
var test = 'test1';
console.log(test);

const test = 'test2';
console.log(test);
```

```Javascript
let test = 'test1';
console.log(test);

var test = 'test2';
console.log(test);
```

```Javascript
const test = 'test1';
console.log(test);

var test = 'test2';
console.log(test);
```

```Javascript
let test = 'test1';
console.log(test);

let test = 'test2';
console.log(test);
```

## データ構造とデータ型

### データ型

#### プリミティブ型

- 数値型
- 文字列型
- 長整数型
- ブーリアン型(真偽値)
- null型
- undefined型
- シンボル型

#### オブジェクト型

`{}`や`[]`、`function () {}`など

#### プリミティブ型は値渡し、オブジェクト型は参照渡し

`=`を使って代入したときに値のコピーが渡されるか、値の場所を指すもの(住所がイメージに近い？)を渡すかの違い

```Javascript
let a = '文字１';
let b = a;
a = '文字２';
console.log(a);
console.log(b);

let objectA = {
  name: '名前１',
  age:20,
};
let objectB = objectA;
objectA.age = 30;
console.log(objectA);
console.log(objectB);

let arrayA = [10, 20];
let arrayB = arrayA;
arrayA.push(30);
console.log(arrayA);
console.log(arrayB);
```
