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

function reverseList(head) {
  let dummy = new ListNode(0);
  let newHead = null;

  function helper(node) {
    if (!node) {
      return;
    }

    helper(node.next);
    if (!newHead) {
      // this node is a reference to an object
      newHead = node;
    }
    // redefine object next pointers
    dummy.next = node;
    dummy = dummy.next;
  }

  helper(head);

  //   dummy.next = null;

  return newHead;
}

// console.log(reverseList(head));

// iteratively
function reverseListIterative(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const nextTemp = current.next; 
    current.next = prev; 
    prev = current; 
    current = nextTemp; 
  }

  return prev;
}

console.log(reverseListIterative(head));
