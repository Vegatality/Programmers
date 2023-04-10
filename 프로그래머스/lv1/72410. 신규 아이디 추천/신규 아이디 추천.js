
// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

// new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.

function solution(new_id){
    // 1단계
    let stage1 = new_id.toLowerCase()

    // 실행한 결괏값 "@bat*.y.abcdefg"이 기댓값 "bat.y.abcdefghi"과 다릅니다.
    // 실행한 결괏값 "z-.^"이 기댓값 "z--"과 다릅니다.
    // 2단계
    // "@"
    // for(let i = 0; i < stage1.length; i++){
    //     if(isNaN(stage1[i]) === true  &&  stage1[i] !== "-" && stage1[i] !== "_" && stage1[i] !== "."){
    //         stage1 = stage1.replaceAll(stage1[i], "")
    //     }
    // }
    // console.log(stage1)
    // "0.347abc^&[]"
    stage1 = [...stage1].filter((ele,idx)=>{
        if(ele >= "a" && ele <= "z"){
            return true  // 소문자 살려
        } else if(isNaN(ele)===false){
            return true
        } else if(ele === "-"){
            return true
        } else if(ele === "_"){
            return true
        } else if(ele === "."){
            return true
        }
    })
    // "ABCD...Z" "^"  "abcd....z"
    // console.log("^" > "Z") // true
    // console.log("^" >= "a") // false
    // console.log("^" < "a") // true
    console.log(stage1)
    stage1 = stage1.join("")

    //    /..+/g  + 앞에 있는 문자(..)가 최소 1개 있고 최대 여러 개 => ..  ... .....


    //    ..+  =>  .(.)  ..(.) ...(.)  ....(.)

    //    (..)+ => (..)  (..)(..)  (..)(..)(..)


    //    (/./.)+   => ..   ....    ......
    // 3 단계
    let stage3 = stage1.replace(/\.\.+/g, ".")


    // ^  : start
    // $  : end
    // |  : or 
    // \ : 특수문자 앞에 씀.   . 은 정규표현식에서 특수문자임
    // ^\.  : 시작 부분 .
    // \.$  : 끝나는 부분 .

    // 4단계
    let stage4 = stage3.replace(/^\.|\.$/g, "")

    // 5단계
    let stage5 = stage4.length? stage4 : "a"

    // 6단계
    let stage6 = [...stage5].filter((ele, idx)=> idx < 15)  // 15개만 살림.
    stage6 = stage6.join("").replace(/\.$/, "")
    // console.log(".asdbdsf.".replace(/\.$/, ""))

    // 7단계
    while(stage6.length <= 2){
        stage6 += stage6[stage6.length-1]
    }

    return stage6
}

solution("...!@BaT#*..y.abcdefghijklm")
solution("z-+.^.")

// let a = "abcd"
// for(let i = 0 ; i< a.length; i++){
//     console.log(a[i])
// }

// function solution(s, n) {
//     let dict = /[a-z]/g        // "abcdefghijklmnopqrstuvwxyz"
//     let bigDict = /[A-Z]/g     // "ABCDE....................Z"

//     "z"  =>  "a"
//     "a B z"
//     // n은 1 이상, 25이하인 자연수입니다.
//     0,1,2,3 %   4   ///    4(즉, 5번째) % 4 =0
//     인덱스 % 배열의 길이   /// 다시 인덱스는 0 이 됨.



//     // 길이는 26, 마지막 인덱스는 25 => 대문자 첫 번째 A의 인덱스는 26
//     // "a B z"   공백은 아무리 밀어도 공백입니다.  "e F d"

//     // 일반적으로 소문자는 대문자보다 크다고 판별함
//     "Z" // 대문자에서 가장 큰 수   "a"  // 소문자에서 가장 작은 수
//     let sBox = s.split("")  // [ 'a', ' ', 'B', ' ', 'z' ]
//     console.log(sBox)   

//     // "a B z"  => "e F d"
//     return sBox.map((ele,idx)=> {
//         if(ele === " "){
//             return " " // " "
//         } else if(ele > "Z" ){ // 소문자니깐  // z가 인덱스가 25였으니까  + 1 = 26 % 26  = [0]
//             return dict[(dict.indexOf(ele) + n) % 26] // "a"
//         } else { // 나머지는 대문자니깐
//             return bigDict[(bigDict.indexOf(ele) + n) % 26] // 만약"Z" + 1(n) ==  A[인덱스0]로 돌아감."
//         }
//     }).join("")



// 0 + 4 => 4
// a + 4 => e
// }

