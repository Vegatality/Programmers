function solution(arr){
    let Box = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== arr[i + 1]) {
            Box.push(arr[i])
        }
    }
    return Box
}
