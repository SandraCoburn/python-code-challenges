'''
A step(x) operation works like this: it changes a number x into x-s(x),
where s(x) is the sum of x's digits. You like applying functions to numbers,
so given the number n, you deide to build a decreasing sequence of numbers:
n, step(n), step(step(n)), et, with 0 as the last element.

Building a single sequence isn't enough for you, so you replace all elements 
of the sequence with the sums of their digits (s(x)) Now you're curious as to which number appears
in the new sequence most often. If there are several answers, return the maximal one

example
For n = 88, the output should be mostFrequentDigitSum(n) = 9
  - Here is the first sequence you built: 88, 72, 63, 54,45,36,27,18,9,0
  - And there is s(x) for each of its elements: 16,9,9,9,9,9,9,9,9,0
  - 
  The most frequen number in the second sequence is 9
  For n= 8 the output should be mostFrequentDigitSum(n) = 8
'''

def mostFrequentDigitSum(number):
  array = getListDigitsSum(number)
  mostCount = countMostFrequentDigitSum(array)
  result = getListNumberWithTheMostCount(array, mostCount)
  return max(result)

def getListDigitsSum(number):
  array = []
  while number > 0:
    summ = sumOfDigits(number)
    number -= summ
    array.append(summ)
  return array

def sumOfDigits(number):
  total= sum([int(digit) for digit in str(number)])
  print("total", total)
  return total

def countMostFrequentDigitSum(array):
  total = max([array.count(element) for element in set(array)])
  print('count total', total)
  return total

def getListNumberWithTheMostCount(array, mostCount):
  return [ number for number in set(array) if array.count(number) == mostCount]

print( mostFrequentDigitSum(88))