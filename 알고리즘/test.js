function solution(drum) {
    let answer = 0;
    
    for(let j = 0;j<drum.length;j++){
        if(possibleDrum(drum, j)){
            answer++;
        }
    }
    return answer;      
}

function possibleDrum(arr, j){
    let i = 0;
    let meetAs = false;

    while(true){
        console.log(arr[i][j]);
        if(arr[i][j] === '#') {
            i = i + 1;
            if(i >= arr.length) {
                console.log('___');
                return true;
            }
        } else if(arr[i][j] === '>') {
            j = j + 1;
        } else if(arr[i][j] === '<') {
            j = j - 1;
        } else {
            if(meetAs) {
                return false;
            } else {
                i = i + 1;
                meetAs = true;
                if(i >= arr.length) {
                    console.log('___');
                    return true;
                }
            }
        }
        
    }
}
console.log(solution(["######",">#*###","####*#","#<#>>#",">#*#*<","######"]));
