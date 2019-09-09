function solution(words, queries) {
    var answer = [];
    let count = 0;
    let flag = false;
    queries.forEach(qr => {
        words.forEach(wd => {
            if(qr.length === wd.length) {
                for(let i=0;i<qr.length;i++){
                    if(qr[i] !== '?'){
                        if (qr[i] === wd[i]) {
                            flag = true;
                        } else {
                            flag = false;
                        }
                    }
                }
                if(flag) {
                    count++;
                }
            };
        });
        answer.push(count);
        count = 0;
    });
    return answer;
}

solution(["frodo", "front", "frost", "frozen", "frame", "kakao"], ["fro??", "????o", "fr???", "fro???", "pro?"]);