function solution(nums) {
    // 0. 뽑을 수 있는 개수를 정해놓음 = nums.length / 2
    // 1. 중복 제거   => 단, 그렇게 되면 배열의 길이가 줄어듦.(중복이 없을 경우 줄어들지 않을 수도 있긴 함)
    // 2. 중복이 제거된 배열에서 num.length/2 만큼 뽑음.  => 결국에는 이게 result이긴한데
    // 3. 생각해봐야 할 경우: 한 종류만 무더기로 있는 경우  [3,3,3,3,3,3]
    // [3]만 남는데 전체의 길이는 6이었으니까 6/2 =3
    // 그래서 결국 [3] 에서 3번을 뽑아야 함. 근데 얘의 결과가 1을 return 하도록 만들어야 함.
    
    let count = nums.length / 2
    // let newSet = new Set(nums)  // Set(3) { 3, 1, 2 }
    let newSet = new Set(nums)  // Set(3) { 3, 1, 2 }
    // console.log([...newSet])  // [ 3, 1, 2 ]
    return [...newSet].filter((ele,idx)=> idx < count).length  // [3,1]

}
