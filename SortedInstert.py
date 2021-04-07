#!/bin/python3

import math
import os
import random
import re
import sys

class DoublyLinkedListNode:
    def __init__(self, node_data):
        self.data = node_data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_node(self, node_data):
        node = DoublyLinkedListNode(node_data)

        if not self.head:
            self.head = node
        else:
            self.tail.next = node
            node.prev = self.tail


        self.tail = node

def print_doubly_linked_list(node, sep, fptr):
    while node:
        fptr.write(str(node.data))

        node = node.next

        if node:
            fptr.write(sep)

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
    #Singly Linked list is a node that points to the next one and then that one to the next
    #doubly linked list have a pointer going both ways
    ## Edged cases:
    # If head is NOne
        #return new node
    #if head node is larger than new node
        # New node is head, head points to next. new = head, head = next. return new node
    #If new node is largerst than tail
        #Check if current is greater than new
    #traverse the linked list
        #check if current > new node
            #insert befor
        # ELSE MOVE to next node
    new_node = DoublyLinkedListNode(data)
    if head is None:
        return new_node
    if new_node.data < head.data:
        head.prev = new_node
        new_node.next = head
        return new_node
    current = head
    current_prev = head
    while current.next is not None:
        current = current.next
        if current.data > new_node.data:
            new_node.next = current
            new_node.prev = current.prev
            current.prev.next = new_node
            current.prev = new_node
            return head
        
    # insert at the end
    current.next = new_node
    new_node.prev = current
    return head
    