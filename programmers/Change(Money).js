function solution(n, money) {
    let answer = 0;
    for (let i = 0; i < money.length; i++) {
        if (n % money[i] === 0) {
            answer++;
        }
    }
    while(true) {
        let j = money.length - 1;
        
        let minusNum = n - money[j];

        if (minusNum === 0) {
            answer++;
        } else {
            
        };

        j--;
    }
    return answer % 1000000007;
}

console.log(solution(5, [1, 2, 5]));
    