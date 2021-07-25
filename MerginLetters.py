

def mergingLetters(s, t):
    #edge cases
    mergedStr = ""
    firstChar = list(s)
    secondChar = list(t)


    for i, ele in enumerate(secondChar):
        if i < len(firstChar):
            mergedStr = mergedStr + firstChar[i]
            print('first pointer', firstChar[i], mergedStr)
        if i < len(secondChar):
            mergedStr = mergedStr + secondChar[i]
            print('second pointer', secondChar[i], "merged",mergedStr) 
    return mergedStr    
    
 
print(mergingLetters('abcd', 'jjjjjjj'))