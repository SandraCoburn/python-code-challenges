'''
You are a professional robber planning to rob houses along a street.
 Each house has a certain amount of money stashed, 
 the only constraint stopping you from robbing each of them is that adjacent 
 houses have security systems connected and it will automatically contact the police
  if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

ex
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
'''
## Can use a dynamic programming style. The answer to all houses is given by: 
# A([2,7,9,3,1]) = mas(2 + A([9,3,1]), 7 + A([3,1]))
class Solution:
    def rob(self, nums: List[int]) -> int:
      # check for some base cases
      if not nums:
        return 0
      if len(nums) == 1:
        return nums[0]
      if len(nums) == 2:
        return max(nums[0], nums[1])
      # now we know there are at least 3 houses
      # dynamic programming part
      # start at the end of the row of houses
      #and build up our partial solution s we work backwards
      right_house = nums[-1]
      left_house = max(nums[-2], nums[-1])
      # we start from the third house from last
      for current_house_num in range(len(nums)-3, -1, -1): #start from last, moving backwards 1 by 1
        current_house_val = max(left_house,nums[current_house_num] + right_house)
        right_house = left_house
        left_house = current_house_val
      return current_house_val

        