function solution(s) {
    var answer = 0;
    let arr = [];
    let result = [];
    let resultCount = [];
    let count = 1;
    for(let i = 1; i <= s.length; i++) {
        for(let j = 0; j <= s.length; j++){
            if(s.substr(i*j,i) !== ''){
                arr.push(s.substr(i*j,i));
            }
        }
        for(let k=0;k<arr.length;k++){
            if(arr[k] === arr[k+1]) {
                count++;
            } else {
                count === 1 ? result.push(arr[k]) : result.push(count + arr[k]);
                count = 1;
            }
        }
        resultCount.push(result.join("").length);
        result = [];
        arr = [];
    }
    answer = Math.min.apply(null,resultCount);

    return answer;
}

solution("aabbaccc");