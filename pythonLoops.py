'''
We can use two types of loops in Python, a for loop and a while loop. A for loop iterates over a given sequence(iterator expression)
A while loop repeats as long as a boolean context evaluates to True.

the break statement terminates the loop containing it. Control of the program flows to the statement immediately after
the body of the loop. If the break statement is inside a nested loop(loop inside another loop), the break statement will only terminate
the innermost loop.

You can use the continue statement to skp the rest of the code inside a loop for the current iretation only. The loop
does not terminate entirely but continues with the next iteration
'''
#Accesing the index in "for" loops
ints = [8,23,45,12,78]

for i, n in enumerate(ints):
  print(f"item #{i} = {n}")


for x in range(5):
  print(x) # 0,1,2,3,4

for x in range(2,7):
  print("starts at two stops before 7",x) # 2,3,4,5,6

for x in range(1,8,2):
  print("starts at 1, before 8 by 2",x) # 1,3,5,7

# while loops to print the same values as the for loops above
count = 0
while count < 5:
  print(count)
  count += 1

count = 2
while count < 7:
  print("starts at two stops before 7",count)
  count += 1

count = 1
while count < 8:
  print("starts at 1, before 8 by 2",count)
  count += 2

# You can use a break statement to exit a for loop or a while loop
count = 0
while True:
  print(count)
  count += 1
  if count >= 5:
    break

# You can use continue statement to skp the current block but not exit the loop entirely
for x in range(8):
  # if x is even, skip this block and do not print
  if x % 2 == 0:
    continue
  print(x)

"""
Write Python code below to loop through and print out all the odd numbers from the numbers
 list in the same order they are received. Don't print any numbers that come after 600 in the sequence.
"""

numbers_list = [
  951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544, 615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941, 386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345, 399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717, 958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470, 743, 527
]

for num in numbers_list:
  if num % 2 != 0 and num < 600:
    print("odds", num)

import string

print("whitespace",string.whitespace)

# Basic types
my_int = 3
print(float(my_int)) #3.0

#modulo operator
my_remainder = 9 % 4
print(my_remainder) #1

# exponentiation operator
two_squared = 2 ** 2
print(two_squared) #4

two_cubed = 2 ** 3
print(two_cubed) #8

# Using multiplication operator to create a new list of string that repeats the original sequence:
my_string = "Python"
repeated = my_string * 3
print(repeated) #PythonPythonPython

my_list = [1,2,3]
repeated_list = my_list * 3
print( repeated_list) #[1, 2, 3, 1, 2, 3, 1, 2, 3]

a = object()
b = object()

a_list = [a] * 5
b_list = [b] * 5
combined_a_and_b = a_list + b_list
print(len(combined_a_and_b)) #10

# To forat a string in Python, you use the % operator to format a set of stored variables in a tuple. You also include 
# argument specifieres in your string with special symbols like %s and %d

name = "Sandra"
formatted_string = "hello, %s!" %name
print(formatted_string) # hello, Sandra!

# If you have more than one argument specifier, you need to enclose your arguments ina tuple:
name2 = "Jackie"
year = 2021
print("Hey %s! It's the year %d." % (name2, year)) #Hey Jackie! It's the year 2021.

# Any object that is not a string can also be formatted using the %s operator
my_sample_list = [1,2,3]
print("my_list: %s" % my_sample_list)#my_list: [1, 2, 3]

'''
#Common argument specifiers:
- %s - String (or any object with a string representation)
- %d - Integers
- %f - Floating point numbers
- %.<number of digits>f - Floating point numbers with a fixed amount of digits to the dot's right
- %x/%X - Integers in hexadecimals(lowercase/uppercase)
'''

product_name = "bananas"
price = 1.23
product_id = 123456

print("%s (id: %d) are currently $%.2f." % (product_name, product_id, price)) #bananas (id: 123456) are currently $1.23.

# The len() method prints out the number of characters in the string
my_string_sample = "Hello, World"
print(len(my_string_sample)) #12

#The index() method prints out theindex of the substring argument's first occurrence
print(my_string_sample.index("o")) #4
print(my_string_sample.index(", W")) #5

# The count() method returns the number of occurrences of the substring argument
print(my_string_sample.count("ll"))#1
print(my_string_sample.count('o'))# 2

# to slice a string, you can use this syntax: [start:stop:step]. To reverse the string's order, you can set the step value to be -1
print(my_string_sample[3:7]) #lo,
print(my_string_sample[3:7:2])# start at index 3 stop before 7, we skip every 2 letters -> l,
print(my_string_sample[::-1]) #dlroW ,olleH

#uppercase and lowercase
print(my_string_sample.upper()) #HELLO, WORLD
print(my_string_sample.lower()) #hello, world

#starts with
print(my_string_sample.startswith("H")) #True
print(my_string_sample.endswith("W")) #False

#Split string, The split() method allows  you to split up a strint into a list. The default separator is any whtespace
print(my_string_sample.split(" ")) #['Hello,', 'World']
print(my_string_sample.split(", ")) #['Hello', 'World']
print(my_string_sample.split("l")) #['He', '', 'o, Wor', 'd']


#Anytime you have an iterable object(like a list) you can check if a specific item exists inside that iterable by using the `in` operator

years = [2018, 2019,2020,2021]
year = 2020

if year in years:
  print("%s is in the years collection" % year) # 2020 is in the years collection

  #If we want to determine if two objects are actually the same instance in memory, we use the `is` operator instead of value comparison operator ==

  d = [1,2,3,4,5]
  e = [1,2,3,4,5]
  print(a == b) #True because a and b have teh same value
  print(a is b) #False because a and b reference two different list object

  x = [1,2,3]
  y = x
  print(x == y) #True because x and y have the same value
  print(x is y) #True because x and y reference the same list object