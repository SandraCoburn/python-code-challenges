def timeConversion(s):
    amPm = s[-2:]
    hour = s[:2]
    minutes = s[3:5]
    seconds = s[6:8]

    if amPm == 'AM':
        return s[:2]
    elif int(hour) == 12 and amPm == "PM":
        return hour + ":" + minutes + ":" + seconds
    else: 
        militaryhour = str(int(hour) + 12)
        return militaryhour + ":" + minutes + ":" + seconds

time = '07:05:45PM'
print(timeConversion(time))