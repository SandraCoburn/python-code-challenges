'''
You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

Example

For a = [1, 2, 3], b = [1, 2, 3], and k = 31, the output should be
countTinyPairs(a, b, k) = 2.
'''
def countTinyPairs(a, b, k):
    # array a from left to right
    # arrat b from right to left
    # if a[x] and b[y] is less than k
        #tiny pairs = (x,y)
    #return number of tiny pair
    tinyPairs = []
    ind = 0
    for x in a:
        for y in reversed(b):
            a[ind] = y
            print(ind)
            if( x and y ) < k:
                tinyPairs.append([x,y])
    return len(tinyPairs)
    # for x, val in enumerate(a):
    #     for x, val2 in reversed(List(enumerate(b))):
    #         if( a[x] and b[y] ) < k:
    #             tinyPairs.add(x,y)
    #     return tinyPairs
    # return len(tinyPairs)