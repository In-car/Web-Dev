x = int(input())
a = 0
for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        if i * i == x:
            a += 1
        else:
            a += 2
print(a)