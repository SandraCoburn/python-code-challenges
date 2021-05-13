'''
Write a function that receives as input the head node of a linked list and an integer k. 
Your function should remove the kth node from the end of the linked list
 and return the head node of the updated list.

For example, if we have the following linked list:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (14) -> (13) -> (12) -> (11) -> null
The head node would refer to the node (20).  Let k = 4, 
so our function should remove the 4th node from the end of the linked list, the node (14).
After the function executes, the state of the linked list should be:
(20) -> (19) -> (18) -> (17) -> (16) -> (15) -> (13) -> (12) -> (11) -> null

If k is longer than the length of the linked list, the linked list should not be changed.
'''

# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def remove_kth_from_end(head, k):
  # remove the kth node from the end
  # return the head of the node
  # if k is longer than list, list shouldn't be changes
  # traverse through the linked list to get the length

    current = head
    count = 0
    
    while current is not None: ## O(n) time complexity
        count += 1
        current = current.next
    print("count", count)
    print("k", k)
   
    # Check if k is equal to length of array
    if k == count:
        return current.next
        
    
    remove = count - k 
    previous = count - k - 1
    current = head 
    previous_node = None
    for i in range(count): ## O(n) 2n
        print("index", previous)
        print("remove", remove)
        if i == previous:
            previous_node = current
        if i == remove:
            previous_node.next = current.next
            return head 
        current = current.next
    
   
      
    return head

