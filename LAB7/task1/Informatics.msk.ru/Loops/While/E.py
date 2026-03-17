def reverse(n):
    a = str(n)
    b = a[::-1]
    return int(b)

n = int(input())
print(reverse(n))