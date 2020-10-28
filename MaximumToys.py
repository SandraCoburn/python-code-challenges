'''
Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. He would choose the first group of  items.
'''

# Complete the maximumToys function below.
def maximumToys(prices, k):
    # sort the prices so that smallest toy prices are first
    prices.sort() #nlogn
    counter=0
  
    # iterate over the prices 
    for price in prices:
    # for prices in prices:
        if k >= price:
            k -= price
            counter += 1
        else: 
            return counter
        #keep substracting the toy price
        # increment our counter for a toy we bought
        # once we can't buy any more toys because we don't have enough money, then we are done
    #return the counter
    # yes, when he can afford all the toys it will hit this return
    return counter
    


