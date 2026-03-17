class Animal: 
   def __init__(self, name, age):
      self.name = name 
      self.age = age
   def get_info(self):
      return f"{self.name} is {self.age} year old"
   def sound(self):
      print("No sound")
   def treat(self, food):
      print("YUM!")

class Cat(Animal): 
   def __init__(self, name, age, breed):
      super().__init__(name, age)
      self.breed = breed
   def get_info(self):
      return f"{self.name} is {self.age} year old, breed: {self.breed}"
   def sound(self):
      print("Meow")
   def treat(self, food):
      if food == "Fish":
         super().treat(food)
      else: print("Cats can't eat that!")

class Dog(Animal): 
   def __init__(self, name, age, breed):
      super().__init__(name, age)
      self.breed = breed
   def get_info(self):
      return f"{self.name} is {self.age} year old, breed: {self.breed}"
   def sound(self):
      print("Woof")
   def treat(self, food):
      if food == "Bone":
         super().treat(food)
      else: print("Dogs can't eat that!")

