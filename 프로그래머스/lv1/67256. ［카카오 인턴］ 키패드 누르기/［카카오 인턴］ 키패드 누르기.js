function solution(numbers, hand) {
    
    // 위치 찾아주는 함수
    function findKey(key) {
        let keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (keypad[i][j] === key) {
                    return [i, j];
                }
            }
        }
    }
    // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]
    var answer = '';
    let left = '*';
    let right = '#';
    for (let i of numbers) {
        if (i === 1 || i === 4 || i === 7) {
            answer += 'L';
            left = i; // 1  // 4 // 5 // 8 // 1 // 4
        }else if (i === 3 || i === 6 || i === 9) {
            answer += 'R'; 
            right = i;  // 3-2 = 1   3// 2 // 9 right의 현 위치에서 2를 까주는 이유는 ?
            // right = i - 2;  // 3-2 = 1   3// 2 // 9 right의 현 위치에서 2를 까주는 이유는 ?
        }else {
            //                     
            // [[1, 2, 3],
            // [4, 5, 6],
            // [7, 8, 9],
            // [*, 0, #]]
            // 숫자로 이동을 한게 아니라 숫자를 비교해서 인덱스 차이로 거리를 구한 거임.
            // 숫자 빼기 숫자로 구현한게 아니라 배열의 인덱스 빼기 인덱스로 구현을 한 것.!!!
            let r = findKey(right); // "LRL"  findkey(1)  => [0, 0] 이게 결국 1을 찾아온는거  // 움직이기 전 r의 위치?  [0,2]
            let l = findKey(left); // findkey(4)    => [1, 0]   [y, x]      // 움직이기 전 l의 위치?  [2,2]
            let middle = findKey(i);  // findkey(5) => [1,1]         // 지금 목표로 하고 있는 중앙의! 위치 [0, 1]
            // 손위치와 눌러야할 키패드 거리 구하기
            let rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);   // (0 - 1) + (0 - 1) = 2  ===>>>  [ 위아래좌표  ,   좌우좌표 ]
            let ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);   // (1 - 1) + (0 - 1) = 1
            if (rr === ll) { // 거리가 같다면 오른손잡이 -> 'R', 왼손잡이 -> 'L'
                hand === 'right' ? (right = i, answer += 'R') : (left = i, answer += 'L');
            }else if(rr > ll) { // 오른손의 거리가 더 멀다면
                answer += 'L';
                left = i;
            }else { // 왼손의 거리가 더 멀다면
                answer += 'R';
                right = i;
            }
        }
    }
    
    return answer;
}