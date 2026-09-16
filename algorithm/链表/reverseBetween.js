/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    let dummy = new ListNode(0,head)
    let p0 = dummy
    for(let i =0; i<left-1;i++){
       p0 = p0.next
    }

    let prev = null
    let cur = p0.next
    for(let i=0;i<right - left +1;i++){
      let nxt = cur.next
      cur.next = prev
      prev = cur
      cur = nxt
    }

    p0.next.next = cur
    p0.next = prev

    return dummy.next

};