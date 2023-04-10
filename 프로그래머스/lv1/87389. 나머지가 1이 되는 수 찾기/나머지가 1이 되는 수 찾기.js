function solution(n) {
    let Box = []
    for (let i = 2; i < n; i++){
        if (n % i === 1) {
            Box.push(i)
        }
    }
    return Box[0]
}