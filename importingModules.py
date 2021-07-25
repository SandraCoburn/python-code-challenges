import math

#print methods that start with is

mathMethods = dir(math)
for meth in mathMethods:
  if meth.startswith("is"):
    print(meth)