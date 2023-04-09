function solution(s) {
    let Dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i=0; i<Dict.length; i++){
        s = s.replaceAll(Dict[i], i)
    }
    return parseInt(s)
}