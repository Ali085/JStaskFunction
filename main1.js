// if (num%7==0) {
//     console.log("Eded 7e bolunur");
// }else{
//     for (let i = num; i > 0; i++) {
//         if (i%7==0) {
//             console.log(i);
//             break
//         }
//     }
//     for (let i = num; i > 0; i--) {
//         if (i%7==0) {
//             console.log(i);
//             break
//         }
//     }
// }

function divisible(num) {
    let qaliq = num%7 ;
    if (num%7==0) {
        console.log(num +" 7e bolunur");
    }else if(qaliq<4){
        console.log(num-qaliq);
    }else{
        for (let i = 0; i < 3; i++) {
            num++
            if (num%7==0) {
                console.log(num);
                break
            }
            
        }
    }
}
divisible(33)