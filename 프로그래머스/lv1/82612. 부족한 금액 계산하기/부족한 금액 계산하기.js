function solution(price, money, count) {
    let a = 0;  // 3
    for (let i = 1; i < count+1; i++){
        a += i * price // 0 + 1*3 = 3 // 2번째 탈 때 내야 할 돈이고
    }
    return money > a ? 0 : a-money
}