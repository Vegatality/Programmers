function solution(array, commands) {
    let Box = []
    for(let i=0; i<commands.length; i++){  // [2,5,3]
        Box.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b)[commands[i][2]-1])  // [2,3,5,6]
    }
    return Box
}