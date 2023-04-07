// function solution(a, b) {
//     let Box = a.map((ele, i) => ele * b[i])  // 재탄생된 a
//     let result = 0;
//     for(let xx of Box){
//         result += xx
//     }
//     return result
// }

function solution(a, b) {
    let Box = a.map((ele, i) => ele * b[i])  // 재탄생된 a
    return  Box.reduce((prev, curv)=> prev + curv)
}    