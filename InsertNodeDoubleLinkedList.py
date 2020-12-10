# Complete the sortedInsert function below.

#
# For your reference:
#
# DoublyLinkedListNode:
#     int data
#     DoublyLinkedListNode next
#     DoublyLinkedListNode prev
#
#
def sortedInsert(head, data):
  #convert integer to node
  data_node = DoublyLinkedListNode(data)
  #edge cases: 
    # head is None or null
    # put data in the front
    if head is None:
      return data_node
    # if new is smaller than head value, insert at the beginning
    if head.data > data_node.data:
      head.prev = data_node
      data_node.next = head
      return data_node
 
    current = head
    #traverse the list(while loop until the end of list):
    while current is not None:
      if data_node.data < current.data:
        data_node.next = current
        data_node.prev = current.prev
        current.prev = data_node
        data_node.prev.next = data_node
        return head
      if current.next is None:
        current.next = data_node
        data_node.prev = current
        return head
      current = current.next



    #Check if data is < current value
      # then insert the node before the current node
        #data.next = current, data.previous = current.previous, current.previous = data, data.previous.next = data
        # use our insert stragety ^
        # if data is larger than everything
        #  add it to the end of the list
    #if we are at the end:
      #insert at end of the list
  
  
  


