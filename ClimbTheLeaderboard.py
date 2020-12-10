def climbingLeaderboard(ranked, player):
    #Write your coe here
    # Convert ranked list to a set (remove dups not needed)
    #loop through player list
    #compare the current score to current ranked score
        #if current score is geater than or equal to current ranked score
            #add index + 1 to results array
            #break
        #append length + 1 to result
    noDupRanked = set(ranked)
    results = []
    for playerScore in player:
        for i, rankedScore in enumerate(noDupRanked):
            if playerScore >= rankedScore:
                results.append(i +1)
                break
            if i == len(noDupRanked)-1:
                results.append(len(noDupRanked)+1)
    return results

    for playerScore in player:
        for i, rankedScore in enumerate(noDupRanked):
            results.append(i +1)
    return results