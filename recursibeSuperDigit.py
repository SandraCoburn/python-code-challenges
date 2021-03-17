import math
import os
import random
import re
import sys

# Complete the superDigit function below.
def superDigit(n, k):

  #Recursion has two parts to itself, the basecase and recurring relation(steps that moves you towards the basecase)
 
  # calculate the super digit of n 
  # then we multiply that by k (to concacanate)
  # super(n) = 8
  # k = 3
  # recurse on this again = 24
  res = superDigiteRecursive(n)
  mult = res * k
  return superDigiteRecursive(str(mult))


#We can create a helper function if we need a pre impose process 
def superDigiteRecursive(n):

  # base case (when do I stop)
    # If n is < 10 (meaning we have a single digit), then we found our superDigit

  # total = 0
  # iterate over the digits:
    #sum the digits together
  # call our recursive function again with the sum of the digits

  total = 0
  if len(n) == 1:
    return n
  for digit in n:
    total += in(digit)
  #or total = sum([int(digit) for digint in n])

  # call our recursive function again with the sum of the digits
  return superDigiteRecursive(str(total))
  
