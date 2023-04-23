function solution(a, b, n) {
    let count = 0
    while(a <= n){
        // 전체 n개에서 a만큼 나눴을 때 b를 돌려줌

        // 받는 콜라의 개수
        count += parseInt(n/a) * b

        // 받고나서 이후의 콜라의 개수
        n = parseInt(n/a) * b + n % a
    }
    return count
}