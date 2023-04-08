function solution(lottos, win_nums) {
    let dict = [6, 6, 5, 4, 3, 2, 1]
    // return [dict[6], dict[2]]

    // 0을 판단하지 않고 맞는 번호 개수
    let correct = lottos.filter((ele) => {
        for (let a of win_nums) {
            if (ele === a) {
                return true
            }
        }
    }).length
    let zeroCount = lottos.filter((ele) => ele === 0).length
    // [맞는 최대 개수, 최소 개수]
    let a = correct + zeroCount
    let b = correct

    return [dict[a], dict[b]]

}