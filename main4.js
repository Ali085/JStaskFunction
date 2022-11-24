// let num = 145;
// let sum = 0;
// if (num>100) {

// 
// }}

function summa(num) {
    let sum = 0;
    if (num > 100) {
        for (let i = 0; i < num; i++) {
            if (i % 8 == 0) {
                sum += 1
            }
        }
        console.log(sum);
    }
    else {
        console.log("Eded uygun deyil");
    }
}
summa(200)