def min_of_four(a, b, c, d):
    a = a if a < b else b
    a = a if a < c else c
    a = a if a < d else d
    return a

a, b, c, d = map(int, input().split())
print(min_of_four(a, b, c, d))