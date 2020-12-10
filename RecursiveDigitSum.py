'''
We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.

If x  has only 1 digit, then its super digit is x .
Otherwise, the super digit of x is equal to the super digit of the sum of the digits of .
For example, the super digit of 9875 will be calculated as:

	super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2  
'''

def superDigit(nums, k):
  # calculate the super digit of n
  # multiply that by k
  # then do our recursion
  # we need to figure out the real number we want a super digit on (super(n) * k)
  # we can call our recursive function again with this number
  superDigit = superDigitRecursive(n)
  combinedSuperDigit = int(superDigit) * k
  
  return superDigitRecursive(str(combinedSuperDigit))

def superDigitRecursive(n):

  # base case, if the length is 1, then we've found our super digit
  # sum everything up
    # traverse over the number and return the sum of what we got
  # call our recursive function with the result

  if len(n) == 1:
    return n
  else:
    return superDigitRecursive(str(sum([int(x) for x in n])))