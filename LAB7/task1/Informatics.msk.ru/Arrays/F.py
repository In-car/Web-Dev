a = input().split()
b = 0
for i in range(1, len(a) - 1):
    if int(a[i]) > int(a[i-1]) and int(a[i]) > int(a[i+1]):
        b += 1
print(b)