var rob = function (nums) {
  const memo = {};

  const findMax = (index) => {
    // If index is out of bounds return 0
    if (index > nums.length - 1) return 0;

    // If we already calculated the given `index` return the calculated value.
    if (memo[index] != null) return memo[index];

    // We can either rob this house or we can skip this house.
    // So, we will take the maximum of these two options.
    // If we rob, then we can only start from `index + 2` house since robbing adjacent houses is forbidden.
    // If we don't rob, then we need to find the maximum of `index + 1` house.
    const res = Math.max(nums[index] + findMax(index + 2), findMax(index + 1));

    // Store the calculated value to use it in other iterations
    memo[index] = res;

    return res;
  };

  return findMax(0);
};
