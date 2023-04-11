function solution(n, arr1, arr2) {
    let result = []
    for (let i = 0; i < n; i++) {
        let queue1 = (parseInt(arr1[i].toString(2)) + parseInt(arr2[i].toString(2))).toString()
        if(queue1.length < n){
            queue1 = "0".repeat(n - queue1.length) + queue1
        }
        result.push(queue1.replaceAll("1","#").replaceAll("2","#").replaceAll("0", " "))
    }
    return result
}