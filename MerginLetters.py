import itertools

def mergingLetters(s, t):
    #edge cases
   
    
    if len(s) == len(t):
        return "".join(i for j in zip(s,t) for i in j)
    else:
        longer, shorter = (s, t) if len(s) > len(t) else (t,s)
        shorter = shorter + shorter[-1] * (len(longer) - len(shorter))
        print("longer",longer)
        return "".join(i for j in zip(shorter,longer) for i in j)
        