function solution(s, n) {
    let dict = "abcdefghijklmnopqrstuvwxyz"
    let dictBig = dict.toUpperCase()
    // console.log(dict[0]) // a
    // let dictBox = dict.split("").length
    // console.log(dictBox) // 26 // 마지막 z의 인덱스는 25
    let sBox = s.split("")
    return sBox.map((ele,idx)=> {
        if(ele === " "){
            return " "
        } else if(ele > "Z"){
            return dict[(dict.indexOf(ele)+n) % 26]
        } else {
            return dictBig[(dictBig.indexOf(ele)+n) % 26]
        }
    }).join("")
}