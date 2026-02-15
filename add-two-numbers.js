// ===============================
// Definition for singly-linked list
// ===============================
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// ===============================
// Main Function (LeetCode Logic)
// ===============================
var addTwoNumbers = function (l1, l2) {

    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {

        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
};

// ===============================
// Helper: Create Linked List
// ===============================
function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

// ===============================
// Helper: Print Linked List
// ===============================
function printList(node) {
    let result = [];

    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }

    console.log(result);
}

// ===============================
// Test Case
// ===============================
let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);

let result = addTwoNumbers(l1, l2);

printList(result);