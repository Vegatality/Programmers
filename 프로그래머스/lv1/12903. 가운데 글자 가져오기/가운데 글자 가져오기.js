
function solution(s) {
    let sp = s.split("")
    if(sp.length % 2 ===0){
        let first = sp[(sp.length / 2) - 1]
        let second = sp[sp.length / 2]
        return first + second
    } else {
        let legend = sp[parseInt(sp.length / 2)]
        return legend
    }
}