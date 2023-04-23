function solution(k, score) {
    const honor = []; // [10, 100, 20]
    const result = [];
    for (let i = 0; i < score.length; i++) {
        // 명예의 전당 기본 셋팅
        // k보다 작은 경우는 (아직 k일 만큼 안지나서 점수가 k보다 덜 쌓여있는 경우)
        if (i < k) {
            honor.push(score[i]);
        }
        // k보다 같거나 커지는 순간(가장 작은애랑 )
        // 만약 k가 3이라고 치면  // i가 4가 되는 순간
        // 이번 점수가 명예의 전당 최하위 점수보다 큰 경우
        if (score[i] > Math.min(...honor)) {
            honor.pop();
            honor.push(score[i]);
            honor.sort((a, b) => b - a);
        }
        // 결괏값에 명예의 전당 중 최하위 점수 입력
        result.push(honor[honor.length - 1]);
    }
    return result;
}
