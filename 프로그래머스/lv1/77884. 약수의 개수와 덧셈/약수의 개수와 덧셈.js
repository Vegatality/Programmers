
// function solution(left, right) {
//     let box = []   // left 24   right 27
//     for (let i = left; i < right + 1; i++) {  // 24 25 26 27
//         box.push(i)
//     }
//     // [24 25 26 27]
//     let countBox = []
//     for(let i = 0; i < box.length; i++){
//         let count = 0  // 여기 count는 24 => 25 넘어갈 때 초기화 됨.
//         for(let j = 1; j < box[i] + 1; j++){
//             if(box[i] % j === 0){
//                 count++
//                  // 24 만의 카운트를 카운트박스에 담음.
//             }

//         } // 반복문이 끝나고 count가 8이 되서 나옴. // count 3이 되서 나옴
//         countBox.push(count) // [8, 3, 4, 4]
//     }
//     let result = 0;
//     for(let i=0; i<countBox.length; i++){
//         if(countBox[i]%2===0){
//             result += box[i]
//         } else {
//             result -= box[i]
//         }
//     }
//     return result
// }
function solution (left, right){
    let result = 0;
    for(let i = left; i < right + 1; i++){
        let count = 0;
        for(let j = 1; j < i + 1; j++){
            if(i % j === 0) {
                count += 1
            }
        }
        if(count % 2 === 0){
            result += i
        } else {
            result -= i
        }
    }
    return result
}