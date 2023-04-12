function solution(n, lost, reserve) {

    // 오름차순 정렬
    let newLost = lost.sort((a, b) => a - b) // 1, 5,6, 7,24
    let newReserve = reserve.sort((a, b) => a - b)
    // n = ?
    //  lost = [2,4,6,8,10] 
    //  reserve = [1,3,4,5,8,13]


    // 도난도 안 당하고, 하나 더 있지도 않은 애들  but 자기 껀 있음.
    // let rest = n - lost.length - reserve.length


    // 도난을 당했지만 여벌이 있어서 상관없는 애들
    // 즉, lost에도 있고 reserve에도 있는 애들
    // 얘네들을 어떻게 구하느냐...

    // lost를 기준으로 filter(reserve랑 같은애들)를 써서 같은 애들만 골라내면 (더 정확히 말하자면 lost - reserve를 해서 차집합을 해줘야 함)
    // 걔네가 결국에는 도난을 당했지만 여벌이 있는 애들을 의미함.

    // reserve도 마찬가지로 filter를 써서 lost에도 있고 reserve에도 있는 애들을 찾아내요.(정확히 말하자면 빼버리는 것.)


    // 리얼 평범한 체육복 한 개 있는 애들  = n이 전체 학생 수 - 찐lost.length - 찐reserve.length

    let realLost = newLost.filter((a) => !newReserve.includes(a))
    let realReserve = newReserve.filter((a) => !newLost.includes(a))

    let rest = n - realLost.length - realReserve.length

    // 이렇게 다 거른 후에 찐 lost랑 찐 reserve 로 요리를 해야 함.
    // 이미 한 번 받은 애는 더 못 받게 해야 함.
    // 5	[2, 4]	[3]	4



    // 7, [2, 4], [1, 3]
    let checkBox = []  // [2, ]
    let giveBox = [] // [3, ]
    for (let i = 0; i < realLost.length; i++) {
        for (let j = 0; j < realReserve.length; j++) {
            if (Math.abs(realLost[i] - realReserve[j]) === 1) {
                if (!checkBox.includes(realLost[i]) && !giveBox.includes(realReserve[j])) {
                    checkBox.push(realLost[i])
                    giveBox.push(realReserve[j])
                }
            }
        }
    }
    return rest + checkBox.length + realReserve.length
}