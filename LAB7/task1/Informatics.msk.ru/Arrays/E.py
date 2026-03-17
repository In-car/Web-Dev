a = input().split()
for i in range(1, len(a)):
    b = int(a[i-1])
    c = int(a[i])
    if (b > 0 and c > 0) or (b < 0 and c < 0):
        print(b, c)
        break