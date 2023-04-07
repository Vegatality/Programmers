function solution(participant, completion) {
    // let p = participant.sort((a, b) => {
    //     if (a > b) return 1
    //     if (a < b) return -1
    //     if (a === b) return 0
    // }) // 문자열 오름차순은 콜백 조건 필요없음.
    let p = participant.sort()
    let c = completion.sort()
    for (let i = 0; i < p.length; i++) {
        if (p[i] !== c[i]) {
            return p[i]
        }
    }
}