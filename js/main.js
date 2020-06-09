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