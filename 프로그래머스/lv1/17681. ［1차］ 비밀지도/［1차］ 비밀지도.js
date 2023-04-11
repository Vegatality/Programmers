// function solution(n, arr1, arr2) {
//     let result = []
//     for (let i = 0; i < n; i++) {
//         let queue1 = (parseInt(arr1[i].toString(2)) + parseInt(arr2[i].toString(2))).toString()
//         console.log(queue1)
//         if(arr1.length < n){
//             // .replace(/^/, "0")
//             queue1 = queue1.replace(/^ /, "0") // "01001"
//             console.log(queue1)
//         }
//             result.push(queue1.replaceAll("1","#").replaceAll("2","#").replaceAll("0", " ")) // ["#####","# # #", "### #", "# ##", "#####"]
//             console.log(result)
//         }
//     }
//     return result
// }


function solution(n, arr1, arr2) {
    let result = []
    for (let i = 0; i < n; i++) {
        let queue1 = (parseInt(arr1[i].toString(2)) + parseInt(arr2[i].toString(2))).toString()
        while(queue1.length < n){
            // .replace(/^/, "0")
            queue1 = queue1.replace(/^/, "0") // "01001"
            // console.log(queue1)
        }
        result.push(queue1.replaceAll("1","#").replaceAll("2","#").replaceAll("0", " ")) // ["#####","# # #", "### #", "# ##", "#####"]
    }
    return result
}