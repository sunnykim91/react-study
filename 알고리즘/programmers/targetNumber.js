class Queue {
  constructor() {
    this.arr = [];
  }
  enqueue(item) {
    this.arr.push(item);
  }
  dequeue() {
    return this.arr.shift();
  }
}


function solution(numbers, target) {
    let count = 0;
    let sum;
    let num1;
    let num2;
    const queue = new Queue();
    queue.arr = numbers;
    for(let i = 0; i < queue.arr.length; i++) {
      num1 = queue.dequeue();
      num2 = queue.dequeue();
      sum(num1, num2);
      sub(num1, num2);
      
      if (sum === target) {

      }
    } 
    return sum;
}

function sum(a, b) {
  return a+b;
}

function sub(a, b) {
  return a-b;
}

console.log(solution([1, 1, 1, 1, 1], 3));