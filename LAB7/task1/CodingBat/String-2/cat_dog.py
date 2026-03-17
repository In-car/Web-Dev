def cat_dog(str):
    count = 0
    i=0
    for i in range(0,len(str)):
        if str[i:i+3] == "cat":

            count=count+1
        elif str[i:i+3] == "dog":

            count=count-1
    return count == 0


print(cat_dog("catdog"))