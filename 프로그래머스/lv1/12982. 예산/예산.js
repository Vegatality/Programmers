function solution (d, budget) {
    let newD = d.sort((a,b)=> a-b)
    let count = 0;
    for(let i = 0; i < newD.length; i++){
        if(budget >= newD[i]){
            budget -= newD[i]
            count ++
        } else {
            break
        }
    }
    return count
}

