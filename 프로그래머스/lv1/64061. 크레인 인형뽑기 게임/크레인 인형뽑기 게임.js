function solution(board, moves) {
    
    let 결과 = 0;
    let 통 = [] //

    for (let i = 0; i < moves.length; i++) {   // 1
        let flag = true
        for (let j = 0; j < board.length; j++) { // board[0][0] == 0
            let 타겟 = board[j][moves[i] - 1]; // board[1][0] == 0
            // if(flag === true){
            if (타겟 !== 0) {
                // let pick = board[j].splice(moves[i]-1,1)
                if (통[통.length - 1] === 타겟) {
                    통.pop()
                    결과 += 2
                } else {
                    통.push(타겟)  // 통 = [4, 3]
                    // flag = false
                }
                   board[j][moves[i] - 1] = 0;
                    break;
            }

            // }
        } 
    }
    return 결과
}    