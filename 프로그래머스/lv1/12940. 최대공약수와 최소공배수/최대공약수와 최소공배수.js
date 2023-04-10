// function solution(n, m) {
//     let n1 = [];
//     let m1 = [];
//     for(let i=1; i < n+1; i++){
//         if(n % i === 0){
//             n1.push(i)
//         }
//     }
//     for(let i=1; i < m+1; i++){
//         if(m % i === 0){
//             m1.push(i)
//         }
//     }
//     let arg = n1.filter((ele)=>{
//         for(let a of m1){
//             if(ele === a){
//                 return true
//             }
//         }
//     })
//     let 최대공약수 = Math.max(...arg)

//     let n2 = []
//     let m2 = []
//     let count = 1
//     let 최소공배수 = 0
//     while(true){
//         n2.push(n * count, n * count)
//         m2.push(m * count, m * count)
//         count++
//         for(let i = 0; i < n2.length; i++){
//             for(let a of m2){
//                 if(n2[i] === a){
//                     최소공배수 = a
//                     return [최대공약수, 최소공배수]
//                 }
//             }
//         }
//     }
// }
function solution(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}