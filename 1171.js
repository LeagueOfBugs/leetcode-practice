class ListNode{
    constructor(val){
        this.val = val,
        this.next = null
    }
}


function removeZeroSumSublists(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let seen = {};
  let prefixSum = 0;
  let current = dummy;

  while (current) {
    prefixSum += current.val;

    if (prefixSum in seen) {
      let tempSum = prefixSum;
      let tempNode = seen[tempSum].next;
      while (tempNode !== current) {
        tempSum += tempNode.val;
        delete seen[tempSum];
        tempNode = tempNode.next;
      }
      seen[prefixSum].next = current.next;
    } else {
      seen[prefixSum] = current;
    }

    current = current.next;
  }

  return dummy.next;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);

console.log(removeZeroSumSublists(head));
