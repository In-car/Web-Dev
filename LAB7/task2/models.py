class Animal: 
   def __init__(self, name, age):
      self.name = name 
      self.age = age
   def __str__(self):
      return f"{self.name} is {self.age} year old"
   def sound(self):
      print("No sound")
   def treat(self, food):
      print("YUM!")

class Cat(Animal): 
   def __init__(self, name, age, breed):
      super().__init__(name, age)
      self.breed = breed
   def __str__(self):
      return f"{self.name} is {self.age} year old, breed: {self.breed}"
   def sound(self):
      print("Meow")
   def treat(self, food):
      if food == "Fish":
         super().treat(food)
      else: print("Cats can't eat that!")
   def pet(self):
      print("Purrr..")

class Dog(Animal): 
   def __init__(self, name, age, breed):
      super().__init__(name, age)
      self.breed = breed
   def __str__(self):
      return f"{self.name} is {self.age} year old, breed: {self.breed}"
   def sound(self):
      print("Woof")
   def treat(self, food):
      if food == "Bone":
         super().treat(food)
      else: print("Dogs can't eat that!")
   def trick(self, t):
      if t == "sit":
         print("Dog sat")
      if t == "lay down":
         print("Dog layed down")
      if t == "speek":
         print("Woof! Bark! ")
      print("Good boy!")
   

