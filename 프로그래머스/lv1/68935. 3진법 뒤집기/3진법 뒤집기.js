function solution(n) {
    let nBox = []
    while (true) {
        if(n / 3 >= 3){
            nBox.push(n % 3)  // >>> [0, 0]
            n = parseInt(n / 3) // >>> 몫
        } else if( n < 3 ){
            nBox.push(n)
            break
        } else {
            nBox.push(n % 3) // >>> [0, 0, 2]
            nBox.push(parseInt(n / 3)) // [0,0,2,1]
            break
        }
    }
    return nBox.reverse().reduce((prev, curv, idx)=> prev + 3**idx*curv , 0)
}