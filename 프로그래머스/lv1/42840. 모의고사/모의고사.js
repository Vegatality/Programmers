function solution(answers) {
    // 각자만의 규칙
    let st1 = [1, 2, 3, 4, 5]
    let st2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let st3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    // 인덱스 % 배열길이(5) = 나머지  0,1,2,3,4 % 배열길이  //    5%5 = [0]

    // 각자 규칙에 맞춰 맞춘 개수
    let st1Count = answers.filter((ele,idx)=> ele === st1[idx%st1.length]).length
    let st2Count = answers.filter((ele,idx)=> ele === st2[idx%st2.length]).length
    let st3Count = answers.filter((ele,idx)=> ele === st3[idx%st3.length]).length

    let Box = []
    let mx = Math.max(st1Count, st2Count, st3Count)

    // 순서 지정해서.
    if(st1Count === mx) Box.push(1)
    if(st2Count === mx) Box.push(2)
    if(st3Count === mx) Box.push(3)

    return Box
}