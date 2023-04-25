function solution(name, yearning, photo) {
    var answer = Array(photo.length).fill(0);
    for (let i = 0; i < photo.length; i++) {
        for (let j = 0; j < photo[i].length; j++) {
            if (name.includes(photo[i][j])) {
                answer[i] += yearning[name.indexOf(photo[i][j])];
            }
        }
    }

    return answer;
}