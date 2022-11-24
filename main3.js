// let num = 65;
// let say = 0 ;

// if (num>50 && num<100) {
//     for (let i = 0; i < num; i++) {
//        if (i%5==0) {
//           say+=1
//        }
        
//     }
// }
// console.log(say);

function summa(num) {
    let sum = 0;
    if (num > 50 && num < 100) {
        for (let i = 0; i < num; i++) {
            if (i % 5 == 0) {
                sum += 1
            }
        }
        console.log(sum);
    }
    else {
        console.log("Eded uygun deyil");
    }
}
summa(65)