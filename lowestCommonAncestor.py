class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
Binary Search Tree
You are given pointer to the root of the binary search tree and two values v1 and v2. 
You need to return the lowest common ancestor (LCA) of v1 and v2 in the binary search tree.
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''

def lca(root, v1, v2):
  #Enter your code here
  # traverse our tree
  ## if both values are on the left we continue left 
  # if both on right we continue right. 
  # I one is at the left and one at the right then we found our lca
  # DFS uses a queue, goes all the way in to the left then back up and goes right, BFS checks level by level
  current = root
  while current is not None:
    if v1 < current.info and v2 < current.info:
      current = current.left
    elif v1 > current.info and v2 > current.info:
      current = current.right
    else:
      return current

def lcaRecursive(root, v1, v2):
  # base case
  # if v1 is to the left and v2 to the right then we return
  if v1 < root.info and v2 < root.info:
    return lcaRecursive(root.left, v1, v2)
  # if they're both to the right, then move to the right
  elif v1 > root.info and v2 > root.info:
    lcaRecursive(root.right, v1,v2)
  #if neither of those, so one is left and one is right, then we found our LCA
  else: 
    return root

