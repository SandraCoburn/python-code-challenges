'''
Edge cases:
[1,3,7,9,2] t=11
[1,2,3,4,5] t=25
[] t=3
[5] t=8
[5] t=5
[1,6] t=7
'''
def twoSum(lst, t):
  #number to find = target - list[p1]
  # [p1,p2] -> [3,4]
  p1 = 0
  p2 = p1 +1
  
  for p1 in range(len(lst)):
    numberToFind = t - lst[p1]
    for p2 in range(len(lst)):
      if lst[p2] == numberToFind:
        return [p1, p2]
  #if there is no solution
  return 

lst = [1,3,7,9,2]
target = 11
print(twoSum(lst, target))

def SumTw0(lst, t):
  #{numberToF, index}
  hashT = {}
  for p in range(len(lst)):
    hashtVal = hashT[lst[p]]
    if hashtVal >= 0:
      return [hashtVal[p], p]
    else:
      numberToF = t - lst[p]
      hashT[numberToF] = p

# print(SumTw0(lst, target))

def sumTwo3(lst, t):
  hasT = {}
  for i, num in enumerate(lst):
    numToFind = t - num
    if numToFind in hasT:
      return [hasT[num, i]]
    else: 
      hasT[num] = i

print(sumTwo3(lst, target))



