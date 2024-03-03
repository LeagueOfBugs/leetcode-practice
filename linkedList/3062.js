/* 
Keep track of:
even score
odd score

two pointers: 
left head
right head.next

needs to return scores
helper function{
base case if right is null

compare for size and if even or odd

sum appropriate pointer

push pointers up
left  left.next.next
right right.next.next
}

call recursively helper with head

return max of even or odd
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const head = new ListNode(2);
head.next = new ListNode(5);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(7);
head.next.next.next.next = new ListNode(20);
head.next.next.next.next.next = new ListNode(5);

function gameResult(head) {
  let evenScore = 0;
  let oddScore = 0;
  let left = head;
  let right = left.next;

  function helper(left, right) {
    if (!right) {
      return;
    }

    if (left.val % 2 === 0) {
      if (left.val > right.val) {
        evenScore++;
      } else {
        oddScore++;
      }
    }

    helper(left.next.next, right.next ? right.next.next : null);
  }

  helper(left, right);

  return evenScore === oddScore ? "Tie" : evenScore > oddScore ? "Even" : "Odd";
}

console.log(gameResult(head));
