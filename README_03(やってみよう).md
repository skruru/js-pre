# 基本の構文で何か作ってみよう

`main.js`にコードを貼り付けて内容を変更したりして試してみてください。

実行は左のバーから虫のマークのついたものを選択し、上の緑色の三角を押すと実行されます。

## 単項演算子・二項演算子を使っていろいろ計算してみよう

```javascript
const num = 7;

console.log('足し算');
console.log(num + 1000);

console.log('引き算');
console.log(num - 1000);

console.log('掛け算');
console.log(num * 1000);

console.log('割り算');
console.log(num / 1000);
console.log(num / 0);

console.log('余り');
console.log(num % 4);

console.log('インクリメント');
console.log(num++);
console.log(++num);

console.log('デクリメント');
console.log(num--);
console.log(--num);

console.log('乗算');
console.log(num ** 2);
```

### 消費税を計算してみましょう

[消費税.html](消費税.html)をやってみよう。

## 比較演算子を使っていろいろ比較してみよう

左辺をベースとして右辺と比較しています。

```javascript
const num = 100;

console.log('等しい');
console.log(num == 100);
console.log(num == '100');

console.log('等しくない');
console.log(num != 90);
console.log(num != '90');

console.log('型を含めて等しい');
console.log(num === 100);
console.log(num === '100');

console.log('型を含めて等しくない');
console.log(num !== 100);
console.log(num !== '100');

console.log('より大きい(大なり)');
console.log(num > 100);
console.log(num > 99);
console.log(num > 101);

console.log('より小さい(小なり)');
console.log(num < 100);
console.log(num < 99);
console.log(num < 101);

console.log('以上');
console.log(num >= 100);
console.log(num >= 99);
console.log(num >= 101);

console.log('以下');
console.log(num <= 100);
console.log(num <= 99);
console.log(num <= 101);
```

## 論理演算子を試してみよう

```javascript
console.log('でない');
console.log(!true);

console.log('または');
console.log(true || true);
console.log(false || true);
console.log(true || false);

console.log('かつ');
console.log(true && true);
console.log(false && true);
console.log(true && false);
```

## 条件文

### if文

```javascript
if (条件１) {
  // 条件１のときの処理
} else if (条件２) {
  // 条件２のときの処理
} else if (条件３) {
  // 条件３のときの処理
} else {
  // 条件１、条件２、条件３のどれでもないときの処理
}
```

#### if文と比較演算子を組み合わせて判定してみよう

```javascript
const num = 100;

if (num < 100) {
  console.log('100より小さいです。');
} else if (num > 100) {
  console.log('100より大きいです。');
} else {
  console.log('100です。');
}
```

### switch文

```javascript
switch (判定したい値) {
  case ●●:
    break;
  case ▲▲:
    break;
  default:
    break;
}
```

#### switch文を使ってみよう

```javascript
const num = 100;

switch (num) {
  case '101':
    console.log('101です。');
    break;
  case '99':
    console.log('99です。');
    break;
  default:
    console.log('101でも99でもありません。');
    break;
}
```

#### チェックボックスのチェック状態を変えてみよう

[チェックステート.html](チェックステート.html)をやってみよう。

## 繰り返し処理

### for文

```javascript
for (初期化式; 条件式; 変化式) {
  // 繰り返しを行いたい処理
}

for (let i = 0; i < 10; ++i) {
  console.log(i);
}
```

#### ループの途中で抜けてみましょう

```javascript
for (let i = 0; i < 10; ++i) {
  if (i === 4) {
    break;
  }

  console.log(i);
}
```

#### ループの途中をスキップしてみましょう

```javascript
for (let i = 0; i < 10; ++i) {
  if (i === 4) {
    continue;
  }

  console.log(i);
}
```

### while文

```javascript
while(条件式) {
    //繰り返し処理
}

let i = 0;
while(i < 10) {
  ++i;
  console.log(i);
}
```

#### FizzBuzzを解いてみよう

- ‘3’ で割り切れる場合は「Fizz」を数の代わりに表示します。
- ‘5’ で割り切れる場合は「Buzz」を数の代わりに表示します。
- ‘3’ と ‘5’ の両方で割り切れる場合（すなわち ‘15’ で割り切れる場合）は「FizzBuzz」を数の代わりに表示します。
上記のいずれにも当てはまらない数の場合、数をそのまま表示します。

`fizbuzz.js`にロジックを書いて、コンソールに出力してみよう。
