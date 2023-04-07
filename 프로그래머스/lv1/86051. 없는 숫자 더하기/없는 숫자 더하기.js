    function solution(numbers) {
        let a = 0;
        for (let i = 0; i < 10; i++) {
            if (!numbers.includes(i)) {
                a += i
            }
        }
        return a;
    }