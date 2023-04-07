function solution(n) {
    let Box = ""
    for(let i=1; i< n+1; i++){
        if(i % 2 === 1){
            Box += "수"
        } else {
            Box += "박"
        }
    }
    return Box
}
