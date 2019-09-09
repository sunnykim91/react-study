function solution(key, lock) {
    var answer = true;
    for(let i=0;i<key.length;i++){
        for(let j=0;j<lock.length;j++){
            console.log(key[i][j] + lock[i][j]);
            if ( key[i][j] + lock[i][j] === 0) {
                answer = false;
            }
        }
    }
    console.log(answer);
    return answer;
}

solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]],[[1, 1, 1], [1, 1, 0], [1, 0, 1]]);