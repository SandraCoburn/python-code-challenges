'''
from typing import List
class Solution:
    def maxCoinsRecursive(self, nums: List[int], left_ind: int, right_ind: int) -> int:
        pointer = f"{left_ind}:{right_ind}"
        if pointer in self.cache:
            return self.cache[pointer]
        if right_ind < left_ind:
            return 0
        if right_ind == left_ind:
            # my subsection only has 1 element in it
            partial_sum = nums[right_ind]
            if left_ind - 1 >= 0:
                partial_sum *= nums[left_ind - 1]
            if right_ind + 1 <= self.right_upper_bound:
                partial_sum *= nums[right_ind + 1]
            self.cache[pointer] = partial_sum
            return partial_sum
        max_sum = 0
        for i in range(left_ind, right_ind + 1):
            partial_sum = nums[i]
            if left_ind - 1 >= 0:
                partial_sum *= nums[left_ind - 1]
            if right_ind + 1 <= self.right_upper_bound:
                partial_sum *= nums[right_ind + 1]
            coins_from_left_pops = self.maxCoinsRecursive(nums, left_ind, i - 1)
            coins_from_right_pops = self.maxCoinsRecursive(nums, i + 1, right_ind)
            partial_sum = partial_sum + coins_from_left_pops + coins_from_right_pops
            max_sum = max(max_sum, partial_sum)
        self.cache[pointer] = max_sum
        return max_sum
    def maxCoins(self, nums: List[int]) -> int:
        if not nums:
            return 0
        elif len(nums) == 1:
            return nums[0]
        elif len(nums) == 2:
            mx = max(nums[0], nums[1])
            mn = min(nums[0], nums[1])
            return (mn * mx) + mx
        self.right_upper_bound = len(nums) - 1
        self.cache = {}
        return self.maxCoinsRecursive(nums, 0, self.right_upper_bound)




Andrew Candela:spiral_calendar_pad:  44 minutes ago
and here's a readme with an explanation:

Andrew Candela:spiral_calendar_pad:  42 minutes ago
readme.md 
# Burst Balloons
​
This comes from [this leetcode problem](https://leetcode.com/problems/burst-balloons/).
Given n balloons, indexed from 0 to n-1.
Each balloon is painted with a number on it represented by array nums.
You are asked to burst all the balloons.
If you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.
Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.
​
Find the maximum coins you can collect by bursting the balloons wisely.
​
Note:
​
You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
​
Example:
Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
```
​
## Thinking through the solution
We can use a [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming) approach 
- which basically means recursively solving the main problem by first solving independant smaller problems.
The independence of the subproblems is important here. 
This problem is tricky to set up independent subproblems - at least it was for me.
My instinct was to try to solve the problem by picking a balloon and popping it FIRST, 
but that makes it impossible to solve the subproblems because they are no longer independent.
​
Here's a solution that works.
It's kind of like a brute force with cacheing approach.
​
Given: 
```
nums = [1,2,3,4,5,6]
```
We can solve this by going number to number, and for each number, imagine this is the balloon you will burst LAST.
​
Let's say we picked the 3rd balloon to pop last...
```
​
#1. Pop these balloons first
                    |       #2. Then pop these
                    |           |
                   _|__       __|____
                 [(1, 2), 3 ,(4 ,5, 6)]
                          ^
                          |
            #3. Finally pop this one
```
Our answer (assuming you pop balloon3 last) is:
```
           /----- pop only these -------\
         _|_                          ___|___
answer([(1,2),3]) + 3*1*1 + answer([3,(4,5,6)])
              ^                     ^
              |                     |
I've included these so you can see what balloons are adjacent
```
It's clear that we will be re-computing segments a lot with this approach.
We can help ourselves out if we cache the result of each burst segment of the array.
This way if we need to get the number of points for a subsection of the nums list that
we've already been to, we can just look it up.
In order to cache we'll need to keep track of the indexes for the list slices that we're computing.
​
'''

class Solution:
    def maxCoinsRecursive(self, nums, left_ind, right_ind):
        pointer = f"{left_ind}:{right_ind}"
        if pointer in self.cache:
            return self.cache[pointer]
        if right_ind < left_ind:
            return 0
        if right_ind == left_ind:
            #sub section only has 1 ele
            partial_sum = nums[right_ind]
            if left_ind - 1 >= 0:
                partial_sum *= nums[left_ind -1]
            if right_ind + 1 <= self.right_upper_bound:
                partial_sum *= nums[right_ind + 1]
            self.cache[pointer] =partial_sum
            return partial_sum
        max_sum = 0
        
        for i in range(left_ind, right_ind + 1):
            partial_sum = nums[i]
            if left_ind -1 >= 0:
                partial_sum *= nums[left_ind - 1]
            if right_ind + 1 <= self.right_upper_bound:
                partial_sum *= nums[right_ind +1]
            coins_from_left_pops = self.maxCoinsRecursive(nums,left_ind, i-1)
            coins_from_right_pops = self.maxCoinsRecursive(nums, i+1, right_ind)
            partial_sum = partial_sum + coins_from_left_pops + coins_from_right_pops
            max_sum = max(max_sum, partial_sum)
        self.cache[pointer] = max_sum
        return max_sum
    def maxCoins(self, nums: [int]) -> int:
        if not nums:
            return 0
        elif len(nums) == 1:
            return nums[0]
        elif len(nums) == 2:
            mx = max(nums[0], nums[1])
            mn = min(nums[0],nums[1])
            return (mn * mx) + mx
        self.right_upper_bound = len(nums) -1
        self.cache = {}
        
        return self.maxCoinsRecursive(nums, 0, self.right_upper_bound)