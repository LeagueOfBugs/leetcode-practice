class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

function middleNode(head) {
  let turtle = head;
  let hare = head;

  while (turtle && turtle.next) {
    turtle = turtle.next;
    hare = hare.next.next;
  }

  return turtle;
}

console.log(middleNode(head));
