const removeNthFromEnd = (head, n) => {
    head.splice(head.length - n, 1)
    return head
};

const head = [1, 2, 3, 4, 5];
const n = 2;

console.log(removeNthFromEnd(head, n))