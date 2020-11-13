def truckTour(petrolpumps):
    #Keep track of gas amount
    tank = 0
    # start position with head, tail is current position
    startInd = 0
    currentInd = 0
    while startInd < len(petrolpumps):
        #Go through each station
        #Each station fill up
        tank += petrolpumps[currentInd][0]
        #substract how many kilometer to the next station
        tank -= petrolpumps[currentInd][1]
        # if we can make it to the next station move current + 1
        if tank >= 0:
            currentInd += 1
            # if currentInd > len(petrolpumps):
            #     currentInd = 0
            currentInd = (currentInd + 1) % len(petrolpumps)
            ##if our head and tail are at the same point, then we made it all the way around so we can return the start index
            if currentInd == startInd:
                return startInd
        #if we can't
        else:
            #move start +1 and current to start
            startInd = currentInd + 1
            currentInd = startInd
            #reset our gas tank = 0
            tank = 0
          