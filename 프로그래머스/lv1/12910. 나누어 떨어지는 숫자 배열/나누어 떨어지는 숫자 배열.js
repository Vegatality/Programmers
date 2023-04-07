// function solution(arr, divisor) {
//     let Box = []
//     for(let a of arr){
//         if(a % divisor === 0){
//             Box.push(a)
//         }
//     }
//     return  Box.length ? Box.sort((a,b)=>a-b) : [-1]
// }


function solution(arr, divisor) {
    let Box = arr.filter((ele)=> ele % divisor === 0)
    return Box.length ? Box.sort((a,b)=>a-b) : [-1]
}