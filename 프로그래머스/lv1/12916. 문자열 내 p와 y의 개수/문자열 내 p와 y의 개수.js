function solution(s){
    let s2 = s.toUpperCase();
    let p의개수 = s2.split("P").length - 1
    let y의개수 = s2.split("Y").length - 1

    if(p의개수 === y의개수){
        return true
    } else if(p의개수 !== y의개수){
        return false
    } else {
        return true
    }
}