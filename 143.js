var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return;
  const list = []; // make a empty stack
  let curr = head;
  while (curr !== null) {
    // put value of link list to stack
    list.push(curr.val);
    curr = curr.next;
  }

  curr = head;

  for (let i = 0, j = list.length - 1; i < list.length && j >= 0; i++, j--) {
    if (i <= j) {
      // put value of i to curr
      curr.val = list[i];
      curr = curr.next;
    }
    if (curr === null) {
      return;
    } else if (i !== j) {
      // put value of j to curr
      curr.val = list[j];
      curr = curr.next;
    }
  }
};
