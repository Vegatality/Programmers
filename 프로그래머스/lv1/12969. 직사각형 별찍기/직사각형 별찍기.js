process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");  // "53"  => [5, 3]
    let a = Number(n[0])
    let b = Number(n[1]);
    for(let i=0; i< b; i++){
        console.log("*".repeat(a))
    }
});