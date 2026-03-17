from models import *

a = Animal("Manmal", 12)
myDog = Dog("Sharik", 3, "German shephard")
myCat = Cat("Murka" , 6, "Siamese cat")

print(a)
a.sound()
a.treat("Fruit")

print(myDog)
myDog.sound()
myDog.treat("Chocolate")
myDog.trick("speek")

print(myCat)
myCat.sound()
myCat.treat("Fish")
myCat.pet()
 