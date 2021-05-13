'''
Given the root of a binary tree where each node contains an integer, determine the sum of all of the integer values in the tree.
Example:
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
The expected output given the above tree is 5 + 4 + 8 + 11 + 13 + 4 + 7 + 2 + 1, so your function should return 55.
[execution time limit] 4 seconds (py3)
[input] tree.integer root
Root node of a binary tree of integers.
[output] integer
The sum of all of the integers in the tree.
'''
#
# Binary trees are already defined with this interface:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def tree_paths_sum(root):
    
    total = sum_total(root)
        
        
    return total
    
def sum_total(root):
    if root is None:
        return 0 
    return (root.value + sum_total(root.left) + sum_total(root.right))