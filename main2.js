// let num = 34;
// let sum = 0;

// if (num < 50) {
//     for (let i = 0; i < num; i++) {
//         if (i % 3 == 0) {
//             sum += 1
//         }
//     }
//     console.log(sum);}else{
//         console.log("Eded 50den boyukdur");
//     }


    function summa(num) {
        let sum = 0;
        if (num < 50 ) {
            for (let i = 0; i < num; i++) {
                if (i % 3 == 0) {
                    sum += 1
                }
            }
            console.log(sum);
        }
        else {
            console.log("Eded uygun deyil");
        }
    }
    summa(34)