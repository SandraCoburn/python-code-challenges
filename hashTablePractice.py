#Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.

#Note Each toy can be purchased only once.

#Example
# Price = [1,2,3,4]  k=7
#The budget is 7 units of currency. He can buy items that cost [1,2,3] for 6 , or [3,4] for 7 units. The maximum is 3 items.

#Searchin with a hash table is the best way


import math
import os
import random
import re
import sys

# Complete the maximumToys function below.
def maximumToys(prices, k):
    # sort out array ascending, to have the cheapest toys on the left. Then substract every toy from our badget.
    # create a counter
    # loop through our sorted array
        #conpare k with price
          # if K is < price:
            # return our count
          # if not:
            # decrement our budget by price and increment our counter
            # k = k - price
        # "buy" each toy, and increment the count
        # once we run out of budget, then we can exit
    
  prices.sort()
  toy_count = 0
  for price in prices:
    if k < price:
      return toy_count
    k = k - price
    toy_count += 1




