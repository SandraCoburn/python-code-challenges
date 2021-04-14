 #another way to sort: selection sort
'''Look for the first element put it in a variable, compare it to the next on the right and if it's not smaller keep comparing till you find the smaller number in the list. Then you add the trade places with the first variable to have the smallest number first, keep doing it till all numbers are sorted from small to large'''
#exemple sudo code or selection sort
'''for i from 0 to n-1
  find the smallest item between i'th item and last item'''
#O notation would be:
# n + (n-1)+ (n-2) + ... +1
# n(n+1)2
#0(n^2

arr = [26, 52,16,4,28,55,3,6]

# def selection_sort(arr):
#   #compare each index to the next one. swapt the elements
#   #iterate through the array, finding the smalles element in the unsorted portion of the array
#   #once thtat's found, swap it with the element on the right edge. 
#   #of the sorted-unsorted boundary. 
#   for i in range(len(arr)):
#     #index of the boundary, as well as the index we're going to swap the smallest ellement with 
#     boundary = i
#     smallest_value = arr[boundary]
#     smallest_index = boundary
#     #find the smallest element
#     for unsorted_index in range(boundary, len(arr)): #starting at boundary, continuining to the rest of the array
#       if unsorted_index in range(boundary, len(arr)):
#         smallest_value = arr[unsorted_index]
#         smallest_index = unsorted_index

#       #smalles is holding the smallest element in the unsroted portion 
#     arr[boundary], arr[smallest_index] = arr[smallest_index], arr[boundary]
#   return arr
# print(selection_sort(arr))

def selection_sort(items):
  #outer loop 
  for i in range(0, len(items) -1):
    cur_index = i
    smalles_index = cur_index
    for j in range(cur_index + 1, len(items)):
      if items[j] < items[smalles_index]:
        smalles_index = j
    items[smalles_index], items[cur_index] = items[cur_index], items[smalles_index]
  return items

our_numbers = [5, 9, 3, 6, 2, 1, 7, 8, 4]
print(selection_sort(our_numbers))
#[1, 2, 3, 4, 5, 6, 7, 8, 9]

