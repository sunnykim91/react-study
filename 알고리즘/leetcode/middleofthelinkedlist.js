


function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
const list1 = new ListNode(1);
const list11 = new ListNode(2);
const list111 = new ListNode(3);
const list1111 = new ListNode(4);
const list11111 = new ListNode(5);
list1.next = list11;
list11.next = list111;
list111.next = list1111;
list1111.next = list11111;

const list2 = new ListNode(1);
const list21 = new ListNode(2);
const list211 = new ListNode(3);
const list2111 = new ListNode(4);
const list21111 = new ListNode(5);
const list211111 = new ListNode(6);
list2.next = list21;
list21.next = list211;
list211.next = list2111;
list2111.next = list21111;
list21111.next = list211111;
  
var middleNode = function(head) {

    let arr = [];
    let result = [];
    let tailNum = 0;
    let headNum = head.val;

    while(true){
        arr.push(head.val);
        if(head.next === null) {
            tailNum = head.val;
            break;
        } else{
            head = head.next;
        }
    }
    let index = Math.floor( (headNum + tailNum -1) / 2);

    for(let i = index; i < tailNum; i++) {
        result.push(arr[i]);
    }

    return result;
};

  console.log(middleNode(list1));
  console.log(middleNode(list2));