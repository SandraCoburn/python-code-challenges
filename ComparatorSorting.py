from functools import cmp_to_key
class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score
        
    def __repr__(self):
        return ""
        
    def comparator(self, a, b):
        # compare scores
            #if a's score is higher
                # return -1
            # if b's score is higher
                #return 1
        # compare the names
            # if a's name is les than b's name
                # return -1
            # if b's name is less thatn a's name
                # return 1
        # return 0 if a and b are the same
        if a.score > b.score:
            return - 1
        elif a.score < b.score:
            return 1
        if a.name > b.name:
            return 1
        elif a.name < b.name:
            return -1
        return 0

n = int(input())