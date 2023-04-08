function solution(numbers) {
    let Box = []
    for (let i = 0; i < numbers.length; i++) {
        // for (let j = 1; j < numbers.length; j++) {
        //         Box.push(numbers[i] + numbers[j])
            
        // }
        for(let j = 0; j < numbers.length; j++){
            if(i !== j){
                Box.push(numbers[i] + numbers[j])
            }
        }
    }
    let newBox = [...new Set(Box)].sort((a, b) => a - b)
    return newBox
}