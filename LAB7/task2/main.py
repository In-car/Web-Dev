from models import *

a = Animal("Manmal", 12)
myDog = Dog("Sharik", 3, "German shephard")
myCat = Cat("Murka" , 6, "Siamese cat")

print(a.get_info())
a.sound()
a.treat("Fruit")

print(myDog.get_info())
myDog.sound()
myDog.treat("Chocolate")

print(myCat.get_info())
myCat.sound()
myCat.treat("Fish")

 