a = [int(i) for i in input().split()]
b = a[0]
c = 0
for i in range(len(a)):
    if a[i] > b:
        b = a[i]
        c = i
print(b, c)