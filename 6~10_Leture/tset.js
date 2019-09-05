function solution(record) {
    var answer = [];
    let spArr = [];
    let arr = [];
    for (let i=0;i<record.length;i++) {
        spArr.push(record[i].split(" "));
    }
    for (let j=0;j<spArr.length;j++) {
        if (spArr[j][0] === 'Enter') {
            arr[j] = {act: 'Enter', id: spArr[j][1], name: spArr[j][2]}
        } else if(spArr[j][0] === 'Leave') {
            arr[j] = {act: 'Leave', id: spArr[j][1]}
        } else if(spArr[j][0] === 'Change') {
            arr[j] = {act: 'Change', id: spArr[j][1], name: spArr[j][2]}
        }
    }
    console.log(arr);
    for(let k=0; k < arr.length; k++){
        if(arr[k].act === 'Enter') {
            console.log(arr.filter((el) => el.id === arr[k].id));
            answer[k] = arr[k].name + '님이 들어왔습니다.';
        } else if(arr[k].act === 'Leave') {
            answer[k] = arr.filter((el)=>  el.id === arr[k].id)[0].name  + '님이 나갔습니다.';
        }
    }
    console.log(answer);
    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);