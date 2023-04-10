function solution(s, n) {
    // let dict = /[a-z]/g        /
    let dict = "abcdefghijklmnopqrstuvwxyz" // "abcdefghijklmnopqrstuvwxyz"
    let bigDict = dict.toUpperCase()     // "ABCDE....................Z"
    console.log(bigDict)
    let sBox = s.split("")  
    return sBox.map((ele,idx)=> {
        if(ele === " "){
            return " " // " "
        } else if(ele > "Z" ){ 
            return dict[(dict.indexOf(ele) + n) % 26] 
        } else { 
            return bigDict[(bigDict.indexOf(ele) + n) % 26] 
        }
    }).join("")

}