'''
You are given  queries. Each query is of the form two integers described below:
- 1 : Insert x in your data structure.
- 2 : Delete one occurence of y from your data structure, if present.
- 3 : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.

The queries are given in the form of a 2-D array  of size  where  contains the operation, and  contains the data element. For example, you are given array . The results of each operation are:
Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1
Return an array with the output: .

Function Description

Complete the freqQuery function in the editor below. It must return an array of integers where each element is a  if there is at least one element value with the queried number of occurrences in the current array, or 0 if there is not.

freqQuery has the following parameter(s):

* queries: a 2-d array of integers
Input Format

The first line contains of an integer , the number of queries.
Each of the next  lines contains two integers denoting the 2-d array .[0,1]

'''

def freqQuery(queries):
    # use a dictionary
    # key = number, value = # occurrences
    num_dict = dict()
    # freq_map: key = # occurrences
    # value = set of numbers with that # occurences
    freq_dict = {}
    answer = []
    # iterate over our queries:
    for query in queries:
        operator = query[0]
        value = query[1]
        if operator == 1:
            # check if it's in our dictionary -> increment it
            if value in num_dict:
                freq_dict[num_dict[value]].remove(value)
                num_dict[value] += 1
            else:
                num_dict[value] = 1
            # if not, insert it with value 1
            # add the value to the freq map at # occ key
            num_occ = num_dict[value]
            if num_occ in freq_dict:
                freq_dict[num_occ].add(value)
            else:
                freq_dict[num_occ] = {value}
        elif operator == 2:
            # check if it exists and is > 0
            if value in num_dict and num_dict[value] > 0:
                freq_dict[num_dict[value]].remove(value)
                num_dict[value] -= 1
                if num_dict[value] in freq_dict:
                    freq_dict[num_dict[value]].add(value)
                else:
                    freq_dict[num_dict[value]] = {value}
                # update our freq map, remove value from set at # occ key
                # decrement by 1
            # if not, do nothing
        elif operator == 3:
            # check our freq map, if we get a non empty result then we add 1 to answer
            if value in freq_dict and len(freq_dict[value]) >= 1:
               answer.append(1)
            else:
               answer.append(0)
            # if not, add 0 to answer
    return answer