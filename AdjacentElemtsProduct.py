'''
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
'''

def adjacent_num_product(list_nums):
    return max(a*b for a, b in zip(list_nums, list_nums[1:]))
print(adjacent_num_product([1,2,3,4,5,6]))
print(adjacent_num_product([1,2,3,4,5]))
print(adjacent_num_product([2,3]))


def adjacentElementsProduct(inputArray):
    
    length = len(inputArray) 
     
    sum = []
     
    for i in range(length-1):
        
        sum.append(inputArray[i] * inputArray[i+1]) #append all the values of the product into the array
        
    return max(sum)