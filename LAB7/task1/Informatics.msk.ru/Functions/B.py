def power(a, n):
    b = 1
    for i in range(n):
        b *= a
    return b

a, n = map(float, input().split())
print(power(a, int(n)))