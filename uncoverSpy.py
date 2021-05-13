'''
In a city-state of n people, there is a rumor going around that one of the n people is a spy for the neighboring city-state.
The spy, if it exists:
Does not trust anyone else.
Is trusted by everyone else (he's good at his job).
Works alone; there are no other spies in the city-state.
You are given a list of pairs, trust. Each trust[i] = [a, b] represents the fact that person a trusts person b.
If the spy exists and can be found, return their identifier. Otherwise, return -1.
Example 1:
Input: n = 2, trust = [[1, 2]]
Output: 2
Explanation: Person 1 trusts Person 2, but Person 2 does not trust Person 1, so Person 2 is the spy.
Example 2:
Input: n = ,3 trust = [[1, 3], [2, 3]]
Output: 3
Explanation: Person 1 trusts Person 3, and Person 2 trusts Person 3, but Person 3 does not trust either Person 1 or Person 2. Thus, Person 3 is the spy.
Example 3:
Input: n = 3, trust = [[1, 3], [2, 3], [3, 1]]
Output: -1
Explanation: Person 1 trusts Person 3, Person 2 trusts Person 3, and Person 3 trusts Person 1. Since everyone trusts at least one other person, there is no spy.
Example 4:
Input: n = 3, trust = [[1, 2], [2, 3]]
Output: -1
Explanation: Person 1 trusts Person 2, and Person 2 trusts Person 3. However, in this situation, we don't have any one person who is trusted by everyone else. So we can't determine who the spy is in this case.
Example 5:
Input: n = 4, trust = [[1, 3],[1, 4],[2, 3],[2, 4],[4, 3]]
Output: 3
Explanation: Person 1 trusts Person 3 and Person 4, Person 2 trusts Person 3 and Person 4, Person 4 trusts Person 3. Everyone trusts Person 3 but Person 3 does not trust anyone, so they are the spy.
'''
'''
Test 1 - not passed
Input:
n: 2
trust: [[1,2]]
Output:
-1
Expected Output:
2
Console Output:
turst {1: [2]}
is trusted {2: [1]}
'''
'''
Test 4 - passed
Input:
n: 3
trust:
[[1,3], 
 [2,3], 
 [3,1]]
Output:
-1
Expected Output:
-1
Console Output:
turst {1: [3], 2: [3], 3: [1]}
is trusted {3: [1, 2], 1: [3]}
'''
'''
passed:
Input:
n: 3
trust:
[[1,2], 
 [2,3]]
Output:
-1
Expected Output:
-1
Console Output:
turst {1: [2], 2: [3]}
is trusted {2: [1], 3: [2]}
'''
#adjecency list
def uncover_spy(n, trust):
   
    t = {}
    is_trusted = {}
    
    
    for i, val in enumerate(trust):
        a = val[0]
        b = val[1]
        
        t.setdefault(a, []).append(b)

        is_trusted.setdefault(b, []).append(a)
        
    possible_spies = []
    print("trust", t)
    print("is trusted", is_trusted)
    #check if person is not in the trust array. because spy doesn't trust anybody
    for person in range(n):
        if person != 0 and person not in t:
            possible_spies.append(person)
    
    print("spies", possible_spies) 
    #check if there is one that is trusted by everybody   
    for k,v in is_trusted.items():
        #remove spies that should not be there if they don't meet the condition we remove
        if len(v) != n-1 and k in possible_spies:
            possible_spies.remove(k)
           
    if len(possible_spies) == 1:
        return possible_spies[0]
    else: 
        return -1
n = 3
trust = [[1, 3], [2, 3]]
trust2 = [[1, 3], [2, 3], [3, 1]]
trust3 =  [[1, 3],[1, 4],[2, 3],[2, 4],[4, 3]]
print(uncover_spy(n, trust2))