function solution(n) {
    function prime(num){
        if(num === 1){return false}
        if(num === 2){return true}
        for(let i = 2; i < Math.sqrt(num) + 1; i++){
            if(num % i === 0){
                return false
            }
        }
        return true
    }

    let count = 0
    for(let i = 1; i < n+1; i++){
        if(prime(i) === true){
            count++
        }
    }
    return count
}