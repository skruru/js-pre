// for(let i = 0; i <= 100 ; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log('FizzBuzz');
//     }else if(i%3 === 0){
//         console.log('Fizz');
//     }else if(i%5 === 0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
// }

for (let index = 1; index < 100; index++) {
    // if (index % 3 === 0 && index % 5 === 0) {
    //     console.log('FizzBuzz');
    // } else if (index % 3 === 0) {
    //     console.log('Fizz');
    // } else if (index % 5 === 0) {
    //     console.log('Buzz');
    // } else {
    //     console.log(index);
    // }
    //変更しにくい

    const fizz = index % 3 === 0;
    const buzz = index % 5 === 0;
    //変更に強い
    
    if (fizz && buzz) {
        console.log('FizzBuzz');
        return;
    }
    if (fizz) {
        console.log('Fizz');
        return;
    }
    if (buzz) {
        console.log('Buzz');
        return;
    }
    console.log(index);
}