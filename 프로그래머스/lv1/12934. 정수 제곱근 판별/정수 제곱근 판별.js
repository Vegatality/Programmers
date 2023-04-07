function solution(n) {
    let msn = Math.sqrt(n)
    return Math.floor(msn) === msn ? (msn+1)**2 : -1
}
