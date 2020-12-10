'''
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

'''

  def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()
        print(nums)
        product1 = 1
        product2 = 1
        array_n_element = len(nums)-1
        
        for num in range(len(nums)):
            product1 = product1 * nums[num]
            
        product2 = nums[0] * nums[1] * nums[array_n_element]
        if product1 > product2:
            return product1
        return product2