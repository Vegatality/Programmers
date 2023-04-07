function solution(a, b) {
    let c = 0
    let box = [a, b].sort((a,b)=> a-b)
    for(let i = box[0]; i < box[1]+1; i++){
        c += i
    }
    return c
}