'''
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a difference equal to a target value.

For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: 2-1 = 1, 3-2=1 , and 4-3=1.

Function Description

Complete the pairs function below. It must return an integer representing the number of element pairs having the required difference.

pairs has the following parameter(s):

k: an integer, the target difference
arr: an array of integers
'''
# Complete the pairs function below.
def pairs(k, arr):
    # brute force:
    # time: O(n^2)
    # space: O(1) - We are not checking what we are getting in but what extra things we need to add like variables
    # Check all combinations
    # checking every element against every other element

    # hash table
    # time: O(n)
    # space: O(n) because hash table contains everything from the array
    # k = a -b then we check k + b = a
    # put everything in a hash table
    # look through every element in the array
        # array[i] + k -> search fo that element in the hash table
        # counter to keep track
        #return back our counter

    mymap = set(arr)
    counter = 0

    for item in arr:
        if item + k in mymap:
            counter += 1
    return counter


# Not the best solution: 
def pairs2(k, arr):
    # sort the array
    # binary search
    # k = a -b
    arr.sort()
    # look through every element in the array
    for item in arr:
        # search for item - k
        to_search = item - k 
        is_found = binary_search(arr, to_search)
        # binary search for that element in our sorted array
        if is_found:
            counter += 1
    return counter

def binary_search(arr, target):
    #base case - find mid point
   
    if len(arr) == 0:
        return False
    mid_point = len(arr) // 2
    if arr[mid_point] < target:
        # just take the right half of the array
        return binary_search(arr[mid_point + 1], target)
    elif arr[mid_point] > target:
        # just take the left half of the array
        return binary_search(arr[:mid_point], target)
    else:
        return True
    
    