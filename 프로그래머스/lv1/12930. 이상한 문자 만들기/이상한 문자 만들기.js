function solution(s) {
    let Box = s.split(" ")
    let resultBox = []
    for(let i=0; i < Box.length; i++){
        let innerBox =""
        for(let j=0; j < Box[i].length; j++){
            if(j%2 === 0){
                innerBox += Box[i][j].toUpperCase()
            } else {
                innerBox += Box[i][j].toLowerCase()
            }
        }
        resultBox.push(innerBox)
    }
    return resultBox.join(" ")
}