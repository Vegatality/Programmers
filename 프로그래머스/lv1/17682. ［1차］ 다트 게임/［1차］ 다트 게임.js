function solution (dartResult){
    let calculateBox = []
    let num = 0
    let result = 0;
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (parseInt(dartResult[i]) === 1 && parseInt(dartResult[i + 1]) === 0) {
                num = 10;
                // 이게 포인트!!!
                i++ // 10 만들고 건너뛰기. 1 0 
            } else {
                num = dartResult[i]
            }
        } else if (dartResult[i] === "S") {
            calculateBox.push(num)
        } else if (dartResult[i] === "D") {
            calculateBox.push(Math.pow(num, 2))
        } else if (dartResult[i] === "T") {
            calculateBox.push(Math.pow(num, 3))
        } else if (dartResult[i] === "*") {
            if(i > 3){ // 맨 앞이 1 0 인 경우도 있으니까. 3 초과로 했음.
                calculateBox[calculateBox.length - 2] *= 2
                calculateBox[calculateBox.length - 1] *= 2
            } else {
                calculateBox[calculateBox.length - 1] *= 2
            }
        } else if (dartResult[i] === "#") {
            calculateBox[calculateBox.length - 1] *= -1
        }
    }
    return calculateBox.reduce((prev,curv)=>parseInt(prev)+parseInt(curv),0)
}