function solution(n) {
   let a = n.toString().split("").sort((a,b)=>b-a).join("")
   return Number(a)
}
