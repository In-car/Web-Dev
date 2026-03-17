def SumOfDigits(n):
    a = 0
    while n > 0:
        a += n % 10
        n //= 10
    return a

n = int(input())
print(SumOfDigits(n))