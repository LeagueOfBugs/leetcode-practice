class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(1);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

function getDecimalValue(head) {
  const result = [];
  function helper(node) {
    if (!node) {
      return;
    }

    result.push(node.val);

    helper(node.next);
  }

  helper(head);

  return parseInt(result.join(""), 2);
}

console.log(getDecimalValue(head));
