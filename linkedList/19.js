function removeNthFromEnd(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let first = dummy;
  let UAV = dummy;

  for (let i = 0; i <= n; i++) {
    UAV = UAV.next;
  }

  while (UAV !== null) {
    first = first.next;
    UAV = UAV.next;
  }

  first.next = first.next.next;

  return dummy.next;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2;
const newHead = removeNthFromEnd(head, n);

// Print the modified linked list
let current = newHead;
const result = [];
while (current !== null) {
  result.push(current.val);
  current = current.next;
}
console.log(result); // Output: [1, 2, 3, 5]
