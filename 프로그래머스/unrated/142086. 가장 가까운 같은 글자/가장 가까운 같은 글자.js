function solution(s) {
    let record = new Map()
    let box = []
    for(let i=0; i<s.length; i++){
        // 일단 레코드를 가져옴 가져왔을 때 값이 있으면 그 값을 쓰고 아니면 -1
        let charIndex = record.has(s[i])? record.get(s[i]) : -1
        if(charIndex === -1){
            box.push(charIndex)
            record.set(s[i], i)
        } else {
            box.push(i-record.get(s[i]))
            record.set(s[i], i)
        }
    }
    return box
}