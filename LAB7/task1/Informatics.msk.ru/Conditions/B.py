def is_leap(n):
    a = False
    if n % 4 == 0:
        if n % 100 != 0 or n % 400 == 0:
            a = True
    return a

y = int(input())
print(is_leap(y))