 def isPalindrome(self, x: int) -> bool:
   str_x = str(x)
   return str(x) == reversed(str(x))
        # convert to a string
        # Change to list -> reverse it -> compare with the original,if theyr're the same, they they're palindrome
        # start at firs and end
        # each iteration we compare the chars, if they're the same, continue
        # move end back, first forward
        # if they're ever not the same, return false
        # keep looping until the indices are the same or pass each other
        
   #another solution: O(n) solution
      # n = str(x)
      #   if x < 0:
      #       return False
      #   if n == n[::-1]:
      #       return True     

    # third solution:
    # s = str(x)
    # left = 0
    # right = s.count() - 1

    # while left < right:
    #   if s[left] != s[right]:
    #     return False
    #   left += 1
    #   right -=1
    # return True

# fourth solution: if we can't use string, we'll do it using integers only
  # 123 % 10 = 3
  # 123 // 10 = 12 #(integer division)
  # 12 % 10 = 2
  # rev = rev + 2
  # rev = 32
  # 12 // 10 = 1
  # rev = rev * 10 + 1
  # rev = 320 +1 =321

  # once we have it reversed, compare to the original, if it's equal, then we have a palindrome
  # edge cases: negative numbers:
  # check at the beginning -> if it's negative return false
  # edge cases: number is zero:

  #  if x < 0:
  #     return False
  # rev = 0
  # pal = x
  # while pal > 0:
  #   digit = pal % 10
  #   pal = pal // 10
  #   rev = rev * 10 + digit
  # return x == rev  