function solution(d, budget) {
  let box = d.sort((a, b) => a - b); // 오름차순으로 정렬
  let count = 0;
  for (let i = 0; i < box.length; i++) {
    if (budget >= box[i]) {
      budget -= box[i];
      count++;
    } else { // budget < box[i]
      break;
    }
  }
  return count;
}
