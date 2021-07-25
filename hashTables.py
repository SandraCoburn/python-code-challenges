class HashTable:
  def __init__(self) -> None:
    self.table_size = 8
    self.table = [None] * self.table_size

  def hashf(self,key):
    t = 0
    for b in key.encode():
      t += b

    return t % self.table_size

  def put(self, key, value):
    index = self.hashf(key)
    print(f"{key} hashed to index {index}")
    self.table[index] = value

  def get(self,key):
    index = self.hashf(key)
    return self.table[index]

ht = HashTable()
ht.put("chris", 65) #chris hashed to index 1
ht.put("sandra", 49) #sandra hashed to index 1
ht.put("sean", 19) #sean hashed to index 7
print(ht.get("sean"))
print(ht.get("chris"))

print(ht.table)