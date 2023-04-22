function solution(ingredient) {
    var answer = 0;
    let recipe = '1231'
    
    let newIng = ingredient.join("");
    let burger = []

    // newIng은 반복문 안에서 찾으면 그 인덱스부터 4개를 계속 지워줘야 함.
    // 찾으려고 할 때 -1이 뜨면 반복문 끝

    // 햄버거는 무조건 4개가 있어야 (1,2,3,1) 4개가 됐을 때 1231인지 확인.
    // 중간으로 찾는 메서드 찾지 말고
    // 일단 4개를 담고 거기서 

    // 런타임 에러 => 반복문이 안멈추는거
    // 시간 초과 => 더 빠른 식을 만들어야 함. 더 빠른 메서드를 써야 함.

    ingredient.forEach((ele)=>{
        // 일단 4개를(하나씩 돌면서 4개가 될 때까지?) 임의의 burger통에 담는다
        burger.push(ele) //[2,1,1,2,3,1]

        // 1
        // 3   
        // 2
        // 1
        if(burger.length >= 4){
            if(burger[burger.length-1] === 1 && burger[burger.length-2] === 3 && burger[burger.length-3] === 2 && burger[burger.length-4] === 1){
               for(let i=0; i<4; i++){
                console.log('y')
                 burger.pop()
               }
               answer += 1
               
            }
            // burger.pop()
        }
    })
    return answer;
}