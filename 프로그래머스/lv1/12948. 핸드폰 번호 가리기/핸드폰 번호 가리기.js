function solution(phone_number) {
    let spBox = phone_number.split("") 
    spBox.splice(0,phone_number.length-4,"*".repeat(phone_number.length-4)) // "*".repeat 해보셈.
    let a = spBox.join("")
    return a
}
