def binary_search(list, search_item):
  low = 0
  high = (len(list) -1)
  found = False
  while low <= high and not found:
    middle = (low + high) // 2 #floor division operator
    guess = list[middle]
    if guess == search_item:
      found = True
      print(middle)
    if guess > search_item:
      #search lower half of remainder
      high = middle - 1
      print(high)
    else:
      #search upper half of remainder
      low = middle +1
      print(low)
  return found

arr = [5,60,44,55,66,77,8]
print(binary_search(arr, 55))