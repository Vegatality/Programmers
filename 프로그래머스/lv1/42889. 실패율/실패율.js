function solution(N, stages) {
    let calculateBox = []
    for (let i = 1; i < N + 1; i++) {  // N이 1을 가지고 들어간다.
        // 1번 스테이지의 실패율
        let countStay = 0;
        let countAll = 0;  // N 1이 countStay 0이랑 countAll 0 을 가지고 들어감.
        for (let j = 0; j < stages.length; j++) { // [2, 1, 2, 6, 2, 4, 3, 3] 
            if (stages[j] === i) { // 스테이지에 머무르고 있는 인원
                countStay++  /// countStay 0에서 1이 되겠죠?

            }
            if (stages[j] >= i) {
                countAll++ // 스테이지를 맛 본 모든 인원 // 8
            }
        }
        //  countStay / countAll    >>>   1/8
        // [i,  countStay/countAll]  >>> [단계,  그 단계의 실패확률]
        // [[i, countStay / countAll], , , , , ]  >>> [[1, 1/8], [2, 3/7], [3, 2/4], [4, 1/2], [5, 0/1]]
        calculateBox[i - 1] = [i, countStay / countAll]
    }
    // 오름차순이면 a-b  내림차순이면 b-a

    // [1, 2, 3, 4].sort((a, b) => {
    //     b - a   // 리턴이 음수면 앞뒤를 유지해요.   리턴이 양수면 앞뒤를 바꿔요.
    //     if (a < b) return 1
    //     if (a > b) return -1
    //     if (a === b) return 0
    // })


    // [ [1, 1/8],    [2, 3/7],    [3, 2/4],   [4, 1/2],   [5, 0/1]   ]
    // [2, 3/7]   >>>>  [1, 1/8]       
    return calculateBox.sort((a, b) => {                      // Compare(b)    a가 b보다 크면 1을 반환함. 근데 sort 는 1이면 앞뒤를 뒤집음.
        if (a[1] > b[1]) return -1                              // 1.localeCompare(      1/8  <  3/7  >>> a자리보다 b자리가 더 크면 -1을 반환 >>>> -1은 앞뒤를 안뒤집음.
        if (a[1] > b[1]) return -1                              // 1.localeCompare(     3/7 > 1/8     >>> a자리가 b자리보다 더 크면 1을 반환 >>>> 1은 앞뒤를 뒤집음.
        a[1] === b[1] ? a[0].toString().localeCompare(b[0].toString()) : b[1].toString().localeCompare(a[1].toString())
    }).map((ele) => ele[0])
    // console.log([[3, 2/4], [4, 1/2], [2, 3/7],  [1, 1/8] ,[5, 0/1]].map((ele)=> ele[0]))
}