function solution(answers) {
    let first = 1
    let second = [2, 1, 2, 3, 2, 4, 2, 5]
    let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    let thirdFlag = 0
    let secondFlag = 0

    // 첫째 맞은 개수
    let firstCount = answers.filter((v) => {
        if (first > 5) {
            first = 1
            return v === first++
        } else {
            return v === first++
        }
    }).length

    // 두 번째 맞은 개수
    let secondCount = answers.filter((ele, idx) => {
        if (secondFlag > 7) {
            secondFlag = 0
            return ele === second[secondFlag++]
        } else {
            return ele === second[secondFlag++]
        }
    }).length

    // 셋째 맞은 개수
    let thirdCount = answers.filter((ele, idx) => {
        if (thirdFlag > 9) {
            thirdFlag = 0
            return ele === third[thirdFlag++]
        } else {
            return ele === third[thirdFlag++]
        }
    }).length

    // 지금 일단 개수는 구했음. 그 개수를 누가 가지고 있느냐 이거지.

    let final = [firstCount, secondCount, thirdCount]
    let max = Math.max(...[firstCount, secondCount, thirdCount])
    let Box = []
    for(let i=0; i < final.length; i++){
        if(final[i] === max){
            Box.push(i+1)
        }
    }
    return Box
}




// function solution(answers) {
//     let answer = []
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     let a1c = answers.filter((ele, idx) => ele === a1[idx%a1.length]).length
//     let a2c = answers.filter((ele, idx) => ele === a2[idx%a2.length]).length
//     let a3c = answers.filter((ele, idx) => ele === a3[idx%a3.length]).length

//     let max = Math.max(a1c, a2c, a3c)

//     if(a1c === max) answer.push(1) 
//     if(a2c === max) answer.push(2) 
//     if(a3c === max) answer.push(3) 

//     return answer
// }
// console.log(solution([1,3,2,4,2]))
