function solution(nums) {
    let numBox = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                numBox.push(nums[i] + nums[j] + nums[k])
            }
        }
    }
    function prime(num) {
        if (num === 1) return false
        for (let i = 2; i < num ** 0.5 + 1; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }
    return numBox.filter((ele) => prime(ele)).length
}