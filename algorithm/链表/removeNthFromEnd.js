var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0,head)
    let p1 = dummy
    let p2 = dummy
    while(n--){
        p2 = p2.next
    }

    while(p2.next){
        p1 = p1.next
        p2 = p2.next
    }

    p1.next = p1.next.next
    return dummy.next

};